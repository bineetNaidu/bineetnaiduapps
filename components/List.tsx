export default function List({ children }) {
  return (
    <ul className="m-8 divide-y divide-x divide-purple-900 gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {children}
    </ul>
  );
}
