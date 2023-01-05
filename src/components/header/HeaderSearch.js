const HeaderSearch = () => {

    const togglePopup = () => {
        document.querySelector('.popup').classList.toggle('popup--active');
    }

    return (
        <>
            <button className="popup-btn" onClick={togglePopup}></button>
            <div 
                className="popup"
                onClick={(e) => {
                    if(e.target && e.target.classList.contains('popup')){
                        togglePopup();
                    }
                }}
            >
                <div className="header-top__search-wrapper">
                    <input type="text" className="header-top__search"
                    placeholder="пошук новин"/>
                </div>              
            </div>
        </>
    )
}

export {HeaderSearch};