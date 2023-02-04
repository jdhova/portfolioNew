const EyeIcon = ({ size = "24", color = "#A3A2A2", className = "" }) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
    >
      <path d="M11.9166 7.08334C13.4349 7.07829 14.9239 7.50182 16.2123 8.30523C17.5007 9.10865 18.5362 10.2593 19.1998 11.625C17.8373 14.4078 15.0545 16.1667 11.9166 16.1667C8.77871 16.1667 5.9959 14.4078 4.6334 11.625C5.297 10.2593 6.33251 9.10865 7.62089 8.30523C8.90928 7.50182 10.3982 7.07829 11.9166 7.08334M11.9166 5.43182C7.7878 5.43182 4.26181 7.99993 2.83325 11.625C4.26181 15.2501 7.7878 17.8182 11.9166 17.8182C16.0454 17.8182 19.5714 15.2501 20.9999 11.625C19.5714 7.99993 16.0454 5.43182 11.9166 5.43182ZM11.9166 9.56061C12.4641 9.56061 12.9892 9.77811 13.3763 10.1653C13.7635 10.5524 13.981 11.0775 13.981 11.625C13.981 12.1725 13.7635 12.6976 13.3763 13.0848C12.9892 13.4719 12.4641 13.6894 11.9166 13.6894C11.3691 13.6894 10.844 13.4719 10.4568 13.0848C10.0697 12.6976 9.85219 12.1725 9.85219 11.625C9.85219 11.0775 10.0697 10.5524 10.4568 10.1653C10.844 9.77811 11.3691 9.56061 11.9166 9.56061M11.9166 7.9091C9.86871 7.9091 8.20068 9.57713 8.20068 11.625C8.20068 13.6729 9.86871 15.3409 11.9166 15.3409C13.9645 15.3409 15.6325 13.6729 15.6325 11.625C15.6325 9.57713 13.9645 7.9091 11.9166 7.9091Z" />
    </svg>
  );
};

export default EyeIcon;