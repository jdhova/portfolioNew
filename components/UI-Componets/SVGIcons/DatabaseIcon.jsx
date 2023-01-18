const DatabaseIcon = ({ size = "24", color = "#A3A2A2", className = "" }) => {
    return (
      <svg
        className={className}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill={color}
      >
        <path d="M19.3636 15.4545V5.63636H4.63636V15.4545H19.3636ZM19.3636 4C19.7976 4 20.2138 4.1724 20.5207 4.47928C20.8276 4.78616 21 5.20237 21 5.63636V15.4545C21 15.8885 20.8276 16.3048 20.5207 16.6116C20.2138 16.9185 19.7976 17.0909 19.3636 17.0909H13.6364V18.7273H15.2727V20.3636H8.72727V18.7273H10.3636V17.0909H4.63636C4.20237 17.0909 3.78616 16.9185 3.47928 16.6116C3.1724 16.3048 3 15.8885 3 15.4545V5.63636C3 4.72818 3.72818 4 4.63636 4H19.3636ZM6.27273 7.27273H13.6364V11.3636H6.27273V7.27273ZM14.4545 7.27273H17.7273V8.90909H14.4545V7.27273ZM17.7273 9.72727V13.8182H14.4545V9.72727H17.7273ZM6.27273 12.1818H9.54545V13.8182H6.27273V12.1818ZM10.3636 12.1818H13.6364V13.8182H10.3636V12.1818Z" />
      </svg>
    );
  };
  
  export default DatabaseIcon;
