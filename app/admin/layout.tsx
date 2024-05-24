import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AdminLayout = ({ children }: Props) => {
  return (
    <div className="flex p-4">
      <div className="p-3 bg-neutral-500">
        <aside>Admin asice</aside>
      </div>
      <div className="p-3">{children}</div>
    </div>
  );
};

export default AdminLayout;
