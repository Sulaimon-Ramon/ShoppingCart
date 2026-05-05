import './Header.css'

const Header = ({setPage}) => {
    // const plant = '\u2615'
    // const blanket = '\u{1F9E8}'
    // const coffee = '\u{1F331}'


    return(
        <header className="header">
            <div className="header_overlay">
                <div className="header_content">
                    <p className="header__eyebrow">Kitchen Collection</p>
                    <h1 className="header_title">Cookware and utensils <em>Every Home</em></h1>
                    <p className="header__subtitle">
                        Discover our curated selection of kitchen essentials.
                    </p>
                    <div className="header__actions">
                        <button className='header__btn--primary' onClick={() => setPage('shop')}>Shop Now!</button>
                        <button className='header__btn--secondary' onClick={() => setPage('about')}>Our Story</button>
                    </div>
                    {/* <div className="header__deco-grid">
                        {[`${plant}`, `${blanket}`, `${coffee}`].map((emoji, i) => (
                            <div key={i} className="header__deco-cell" style={{animationDelay: `${i * 0.5}s`}}>
                                 <span className="header__deco-emoji">{emoji}</span>
                            </div>
                        ))}
                    </div> */}
                </div>
            </div>
        </header>
    )
}

export default Header