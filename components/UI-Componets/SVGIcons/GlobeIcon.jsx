const GlobeIcon = ({ size = "24", color = "#A3A2A2", className = "" }) => {
    return (
      <svg
        className={className}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill={color}
      >
        <path d="M20.3597 14.9844L20.3855 14.8983C21.0506 12.9918 21.0506 10.9159 20.3855 9.00942L20.3597 8.92333C19.7322 7.19108 18.5881 5.69381 17.0825 4.63431C15.5769 3.57482 13.7824 3.00429 11.9422 3C10.1013 3.00181 8.30576 3.57137 6.79965 4.6312C5.29354 5.69104 4.15003 7.18969 3.52464 8.92333L3.49885 9.00942C2.83372 10.9159 2.83372 12.9918 3.49885 14.8983L3.52464 14.9844C4.15003 16.718 5.29354 18.2167 6.79965 19.2765C8.30576 20.3364 10.1013 20.9059 11.9422 20.9077C13.783 20.9059 15.5786 20.3364 17.0847 19.2765C18.5908 18.2167 19.7343 16.718 20.3597 14.9844ZM9.74965 15.3977H14.1347C13.6941 16.7672 12.9438 18.0164 11.9422 19.0481C10.9406 18.0164 10.1903 16.7672 9.74965 15.3977V15.3977ZM9.38853 14.0201C9.12493 12.6553 9.12493 11.2525 9.38853 9.88759H14.4958C14.6267 10.5686 14.6929 11.2604 14.6936 11.9539C14.6933 12.6473 14.6271 13.3392 14.4958 14.0201H9.38853ZM4.37585 11.9539C4.37731 11.2555 4.47275 10.5605 4.65959 9.88759H7.98705C7.75776 11.2555 7.75776 12.6522 7.98705 14.0201H4.65959C4.47275 13.3473 4.37731 12.6523 4.37585 11.9539V11.9539ZM14.1347 8.51007H9.74965C10.1903 7.14055 10.9406 5.89132 11.9422 4.85965C12.9438 5.89132 13.6941 7.14055 14.1347 8.51007V8.51007ZM15.8973 9.88759H19.2247C19.6032 11.239 19.6032 12.6687 19.2247 14.0201H15.8973C16.1266 12.6522 16.1266 11.2555 15.8973 9.88759V9.88759ZM18.6831 8.51007H15.5878C15.174 7.05964 14.4689 5.70906 13.5156 4.5411C14.6164 4.77909 15.6507 5.25848 16.5443 5.94478C17.4378 6.63107 18.1682 7.50719 18.6831 8.51007V8.51007ZM10.3687 4.5411C9.4154 5.70906 8.71029 7.05964 8.29658 8.51007H5.20127C5.71608 7.50719 6.44654 6.63107 7.34007 5.94478C8.2336 5.25848 9.26796 4.77909 10.3687 4.5411V4.5411ZM5.20127 15.3977H8.29658C8.71029 16.8481 9.4154 18.1987 10.3687 19.3666C9.26729 19.1303 8.23217 18.6516 7.3384 17.9651C6.44463 17.2787 5.71461 16.4016 5.20127 15.3977V15.3977ZM13.5156 19.3666C14.4689 18.1987 15.174 16.8481 15.5878 15.3977H18.6831C18.1697 16.4016 17.4397 17.2787 16.5459 17.9651C15.6522 18.6516 14.617 19.1303 13.5156 19.3666V19.3666Z" />
      </svg>
    );
  };
  
  export default GlobeIcon;