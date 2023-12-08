export const MContent = ({ href, index, menu, children }: contentProps) => {
  return (
    <li key={index}>
      <a
        href={href}
        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-gray-50 hover:bg-gray-100 dark:hover:bg-gray-700 group"
      >
        {children}
        <p className="ms-3 uppercase">{menu}</p>
      </a>
    </li>
  );
};
