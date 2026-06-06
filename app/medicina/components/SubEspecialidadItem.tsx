export function SubEspecialidadItem({ name }: { name: string }) {
  return (
    <li className="text-indigo-700/80 text-sm flex items-start gap-2 pl-2 py-1">
      <span className="text-indigo-300 mt-0.5">•</span>
      {name}
    </li>
  );
}
