import React, {useMemo} from 'react';

const MIRROR_DOMAIN = 'steamlua.cloud';
const MAIN_SITE = 'https://guide.openlua.cloud';

function isMirror(): boolean {
  if (typeof window === 'undefined') return false;
  if (window.location.search.includes('mirror=1')) return true;
  return window.location.hostname.includes(MIRROR_DOMAIN);
}

export default function Root({children}: {children: React.ReactNode}) {
  const mirror = useMemo(() => isMirror(), []);

  return (
    <>
      {mirror && (
        <>
          <div className="mirror-border" />
          <div className="mirror-notch">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <span>
              You're on a mirror of{' '}
              <a href={MAIN_SITE}>guide.openlua.cloud</a>
            </span>
          </div>
        </>
      )}
      {children}
    </>
  );
}
