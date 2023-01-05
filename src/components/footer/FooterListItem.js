const FooterListItem = (props) => {
    return (
        <li className="footer-top__list-item">
            <a className="footer-top__list-link" href="#">
                {props.children}
            </a>
        </li>
    )
}

export {FooterListItem};