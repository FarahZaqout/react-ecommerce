const MenuItem = (props) => {
  const { title, subtitle, size, imageUrl } = props;
  return (
    <div className={`${size ? size + ' ' : ''}menu-item`}>
      <div
        className="background-image"
        style={{backgroundImage: `Url(${imageUrl})`}}
      />
      <div className="content">
        <h3 className="menu-itme__title">{title.toUpperCase()}</h3>
        <span className="menu-itme__subtitle">{subtitle.toUpperCase()}</span>
      </div>
    </div>
  )
}

export default MenuItem;
