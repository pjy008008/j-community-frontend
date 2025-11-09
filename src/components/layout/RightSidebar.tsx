import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Calendar, Shield } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

const trendingCommunities = [
  { name: "개발", members: "125k", trend: "+2.5k" },
  { name: "커리어", members: "153k", trend: "+3.2k" },
  { name: "디자인", members: "82k", trend: "+1.8k" },
  { name: "게임", members: "97k", trend: "+2.1k" },
  { name: "창업", members: "64k", trend: "+1.5k" },
];

const RightSidebar = () => {
  return (
    <aside className="hidden xl:block w-80 h-[calc(100vh-4rem)] sticky top-16 space-y-4 overflow-y-auto">
      {/* Community Info */}
      <Card className="p-4">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
            <span className="text-sm font-bold text-primary-foreground">J</span>
          </div>
          <div>
            <h3 className="font-bold text-foreground">커뮤니티 홈</h3>
            <p className="text-xs text-muted-foreground">당신의 개인 피드</p>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-4">
          다양한 주제의 커뮤니티에 참여하여 지식과 경험을 공유하세요.
        </p>
        <Link to="/submit">
          <Button className="w-full bg-gradient-primary hover:opacity-90 transition-opacity shadow-medium">
            게시물 작성
          </Button>
        </Link>
      </Card>

      {/* Trending Communities */}
      <Card className="p-4">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="h-5 w-5 text-primary" />
          <h3 className="font-bold text-foreground">급상승 커뮤니티</h3>
        </div>

        <div className="space-y-3">
          {trendingCommunities.map((community, index) => (
            <div key={index}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-muted-foreground w-6">
                    {index + 1}
                  </span>
                  <div>
                    <div className="text-sm font-medium text-foreground">
                      j/{community.name}
                    </div>
                    <div className="text-xs text-muted-foreground flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {community.members}
                    </div>
                  </div>
                </div>
                <span className="text-xs font-semibold text-green-600">
                  {community.trend}
                </span>
              </div>
              {index < trendingCommunities.length - 1 && (
                <Separator className="mt-3" />
              )}
            </div>
          ))}
        </div>

        <Button variant="ghost" className="w-full mt-4 text-primary">
          모두 보기
        </Button>
      </Card>

      {/* Platform Info */}
      <Card className="p-4">
        <h3 className="font-bold text-foreground mb-3">J-Community</h3>

        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-2">
            <Calendar className="h-4 w-4 text-primary mt-0.5" />
            <div>
              <div className="font-medium text-foreground">2024년 설립</div>
              <div className="text-xs text-muted-foreground">
                커뮤니티 기반 플랫폼
              </div>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <Users className="h-4 w-4 text-primary mt-0.5" />
            <div>
              <div className="font-medium text-foreground">125,420 멤버</div>
              <div className="text-xs text-muted-foreground">
                활발한 커뮤니티
              </div>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <Shield className="h-4 w-4 text-primary mt-0.5" />
            <div>
              <div className="font-medium text-foreground">안전한 공간</div>
              <div className="text-xs text-muted-foreground">
                커뮤니티 가이드라인 준수
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-3" />

        <div className="space-y-1">
          <a
            href="#"
            className="text-xs text-muted-foreground hover:text-primary block"
          >
            이용약관
          </a>
          <a
            href="#"
            className="text-xs text-muted-foreground hover:text-primary block"
          >
            개인정보처리방침
          </a>
          <a
            href="#"
            className="text-xs text-muted-foreground hover:text-primary block"
          >
            커뮤니티 가이드
          </a>
        </div>

        <div className="mt-3 pt-3 border-t border-border">
          <p className="text-xs text-muted-foreground">
            © 2025 J-Community. All rights reserved.
          </p>
        </div>
      </Card>
    </aside>
  );
};

export default RightSidebar;
