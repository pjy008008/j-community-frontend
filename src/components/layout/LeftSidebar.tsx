import {
  Home,
  TrendingUp,
  Compass,
  MessageSquare,
  Users,
  Settings,
  Code,
  Palette,
  Briefcase,
  Gamepad2,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link, useLocation } from "react-router-dom";

const mainMenuItems = [
  { icon: Home, label: "홈", path: "/" },
  { icon: TrendingUp, label: "인기", path: "/trending" },
  { icon: Compass, label: "탐색", path: "/explore" },
];

const communities = [
  { icon: Code, name: "개발", members: "125k", color: "text-blue-500" },
  { icon: Palette, name: "디자인", members: "82k", color: "text-purple-500" },
  { icon: Briefcase, name: "커리어", members: "153k", color: "text-green-500" },
  { icon: Gamepad2, name: "게임", members: "97k", color: "text-red-500" },
];

const LeftSidebar = () => {
  const location = useLocation();

  return (
    <aside className="hidden lg:block w-64 h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto">
      <Card className="border-0 shadow-none bg-transparent">
        <div className="p-4 space-y-1">
          {mainMenuItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link key={index} to={item.path}>
                <button
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                    isActive
                      ? "bg-secondary text-foreground font-medium"
                      : "text-muted-foreground hover:bg-secondary/50"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="text-sm">{item.label}</span>
                </button>
              </Link>
            );
          })}
        </div>

        <Separator className="my-2" />

        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-muted-foreground uppercase">
              내 커뮤니티
            </span>
          </div>
          <div className="space-y-1">
            {communities.map((community, index) => {
              const Icon = community.icon;
              return (
                <button
                  key={index}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:bg-secondary/50 transition-colors"
                >
                  <Icon className={`h-4 w-4 ${community.color}`} />
                  <div className="flex-1 text-left">
                    <div className="text-sm font-medium text-foreground">
                      j/{community.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {community.members} 멤버
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <Separator className="my-2" />

        <div className="p-4 space-y-1">
          <Link to="/messages">
            <button
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                location.pathname === "/messages"
                  ? "bg-secondary text-foreground font-medium"
                  : "text-muted-foreground hover:bg-secondary/50"
              }`}
            >
              <MessageSquare className="h-5 w-5" />
              <span className="text-sm">메시지</span>
            </button>
          </Link>
          <Link to="/profile">
            <button
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                location.pathname === "/profile"
                  ? "bg-secondary text-foreground font-medium"
                  : "text-muted-foreground hover:bg-secondary/50"
              }`}
            >
              <Users className="h-5 w-5" />
              <span className="text-sm">프로필</span>
            </button>
          </Link>
          <Link to="/settings">
            <button
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                location.pathname === "/settings"
                  ? "bg-secondary text-foreground font-medium"
                  : "text-muted-foreground hover:bg-secondary/50"
              }`}
            >
              <Settings className="h-5 w-5" />
              <span className="text-sm">설정</span>
            </button>
          </Link>
        </div>
      </Card>
    </aside>
  );
};

export default LeftSidebar;
