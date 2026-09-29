import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { useAuth } from '../../context/AuthContext';
import { useLanguage } from '../../context/LanguageContext';
import { useTypewriter } from '../../hooks/useTypewriter';
import NotificationBell from '../NotificationBell';
import LanguageSwitcher from '../LanguageSwitcher';
import igoLogo from '../../assets/igo-nursery-logo.jpeg';

// Web Speech API - built into Chrome/Edge/Safari, no extra dependency.
// Firefox and some browsers don't implement it, so the mic button only
// renders when it's actually available (checked once, not per-render).
const SpeechRecognitionCtor = typeof window !== 'undefined'
  ? (window.SpeechRecognition || window.webkitSpeechRecognition)
  : null;

// Voice input locale per selected site language (spec: en-IN/ta-IN/hi-IN/
// ml-IN/te-IN/kn-IN).
const VOICE_LOCALES = { en: 'en-IN', ta: 'ta-IN', hi: 'hi-IN', ml: 'ml-IN', te: 'te-IN', kn: 'kn-IN' };

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  // Phone-only menu button: opens/closes the category menu (NavBar) via a
  // body class, so no state has to be shared between Header and NavBar.
  const [menuOpen, setMenuOpen] = useState(false);
  const hasMenu = location.pathname !== '/account';
  useEffect(() => setMenuOpen(false), [location.pathname]);
  useEffect(() => {
    document.body.classList.toggle('mobile-menu-open', menuOpen);
    return () => document.body.classList.remove('mobile-menu-open');
  }, [menuOpen]);
  const { cartCount, wishlistCount } = useStore();
  const { isAuthenticated } = useAuth();
  const { language, t } = useLanguage();
  const [query, setQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [voiceError, setVoiceError] = useState('');
  const recognitionRef = useRef(null);
  const typedPlaceholder = useTypewriter(t('search.placeholders'));
  const showAnimatedPlaceholder = !query && !isSearchFocused;

  function runSearch(term) {
    const trimmed = term.trim();
    if (trimmed) navigate(`/search?q=${encodeURIComponent(trimmed)}`);
  }

  function handleSubmit(e) {
    e.preventDefault();
    runSearch(query);
  }

  function handleMicClick() {
    if (!SpeechRecognitionCtor) return;
    setVoiceError('');

    if (isListening) {
      recognitionRef.current?.stop();
      return;
    }

    const recognition = new SpeechRecognitionCtor();
    // Voice input follows the site's selected language, per spec: English
    // input when the site is in English, Tamil input when it's in Tamil.
    recognition.lang = VOICE_LOCALES[language] ?? 'en-IN';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => setIsListening(true);
    recognition.onerror = (event) => {
      setIsListening(false);
      setVoiceError(event.error === 'not-allowed' ? t('search.micDenied') : t('search.micError'));
    };
    recognition.onend = () => setIsListening(false);
    recognition.onresult = (event) => {
      const heard = event.results?.[0]?.[0]?.transcript ?? '';
      if (heard) {
        setQuery(heard);
        runSearch(heard);
      }
    };

    recognitionRef.current = recognition;
    recognition.start();
  }

  useEffect(() => () => recognitionRef.current?.stop(), []);

  return (
    <header className="primary-header">
      <div className="logo-container" onClick={() => navigate('/')} role="button" tabIndex={0}>
        <img src={igoLogo} alt="IGO Nursery" className="logo-icon" />
        <span className="logo-text-animate">IGO Nursery</span>
      </div>

      <form className="search-bar" onSubmit={handleSubmit}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <div className="search-input-wrap">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
            aria-label={t('search.ariaLabel')}
          />
          {showAnimatedPlaceholder && (
            <span className="search-typing-placeholder" aria-hidden="true">
              {typedPlaceholder}
              <span className="search-typing-cursor">|</span>
            </span>
          )}
        </div>
        {SpeechRecognitionCtor && (
          <button
            type="button"
            className={`search-mic-btn${isListening ? ' listening' : ''}`}
            onClick={handleMicClick}
            aria-label={isListening ? t('search.micListening') : t('search.micSearch')}
            title={isListening ? t('search.micListening') : t('search.micSearch')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
              <path d="M19 10v1a7 7 0 0 1-14 0v-1" />
              <line x1="12" y1="18" x2="12" y2="22" />
              <line x1="8" y1="22" x2="16" y2="22" />
            </svg>
          </button>
        )}
        {voiceError && <span className="search-mic-error">{voiceError}</span>}
      </form>

      <div className="user-actions">
        {hasMenu && (
          <button
            type="button"
            className="mobile-menu-btn"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
              {menuOpen
                ? <><line x1="5" y1="5" x2="19" y2="19" /><line x1="19" y1="5" x2="5" y2="19" /></>
                : <><line x1="4" y1="7" x2="20" y2="7" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="17" x2="20" y2="17" /></>}
            </svg>
          </button>
        )}
        <LanguageSwitcher />
        <NotificationBell />
        <div className="action-icon" onClick={() => navigate(isAuthenticated ? '/account' : '/login')} role="button" tabIndex={0} title={t('header.account')}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
        </div>
        <div className="action-icon" onClick={() => navigate('/wishlist')} role="button" tabIndex={0} title={t('header.wishlist')}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          {wishlistCount > 0 && <span className="cart-badge">{wishlistCount}</span>}
        </div>
        <div className="action-icon" onClick={() => navigate('/cart')} role="button" tabIndex={0} title={t('header.cart')}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
          <span className="cart-badge">{cartCount}</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
