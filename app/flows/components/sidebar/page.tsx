import SidebarItem from "./sidebar-item";
import { ShapeComponents, ShapeType } from "@/app/flows/components/shape/types/page";

import "./css/page.scss";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-label">Drag shapes to the canvas</div>
      <div className="sidebar-items">
        {Object.keys(ShapeComponents).map((type) => (
          <SidebarItem type={type as ShapeType} key={type} />
        ))}
      </div>
    </div>
  );
}
