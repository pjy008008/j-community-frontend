import { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Users, 
  TrendingUp, 
  Search, 
  ArrowLeft,
  Gamepad2,
  Code,
  Palette,
  Briefcase,
  Rocket,
  BookOpen,
  Music,
  Camera,
  Heart,
  Utensils
} from "lucide-react";

const communities = [
  { 
    name: "개발", 
    members: "125k", 
    trend: "+2.5k",
    description: "프로그래밍, 웹/앱 개발, 코딩 관련 커뮤니티",
    icon: Code,
    color: "bg-blue-500"
  },
  { 
    name: "커리어", 
    members: "153k", 
    trend: "+3.2k",
    description: "취업, 이직, 커리어 성장에 관한 이야기",
    icon: Briefcase,
    color: "bg-purple-500"
  },
  { 
    name: "디자인", 
    members: "82k", 
    trend: "+1.8k",
    description: "UI/UX, 그래픽 디자인, 크리에이티브",
    icon: Palette,
    color: "bg-pink-500"
  },
  { 
    name: "게임", 
    members: "97k", 
    trend: "+2.1k",
    description: "게임 리뷰, 공략, 게이머들의 소통 공간",
    icon: Gamepad2,
    color: "bg-green-500"
  },
  { 
    name: "창업", 
    members: "64k", 
    trend: "+1.5k",
    description: "스타트업, 사업 아이디어, 기업가 정신",
    icon: Rocket,
    color: "bg-orange-500"
  },
  { 
    name: "독서", 
    members: "48k", 
    trend: "+0.9k",
    description: "책 추천, 독후감, 독서 모임",
    icon: BookOpen,
    color: "bg-yellow-500"
  },
  { 
    name: "음악", 
    members: "71k", 
    trend: "+1.2k",
    description: "음악 감상, 악기, 음악 제작",
    icon: Music,
    color: "bg-red-500"
  },
  { 
    name: "사진", 
    members: "56k", 
    trend: "+1.1k",
    description: "사진 촬영 기법, 작품 공유, 카메라 리뷰",
    icon: Camera,
    color: "bg-indigo-500"
  },
  { 
    name: "건강", 
    members: "89k", 
    trend: "+1.7k",
    description: "운동, 다이어트, 건강 관리",
    icon: Heart,
    color: "bg-rose-500"
  },
  { 
    name: "요리", 
    members: "62k", 
    trend: "+1.3k",
    description: "레시피 공유, 맛집 추천, 요리 팁",
    icon: Utensils,
    color: "bg-amber-500"
  },
];

const Communities = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState<"all" | "trending">("all");

  const filteredCommunities = communities
    .filter(community => 
      community.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      community.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (filter === "trending") {
        const trendA = parseInt(a.trend.replace(/[+k]/g, ""));
        const trendB = parseInt(b.trend.replace(/[+k]/g, ""));
        return trendB - trendA;
      }
      return 0;
    });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4 mb-4">
            <Link to="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-foreground">커뮤니티 탐색</h1>
              <p className="text-sm text-muted-foreground">
                관심있는 커뮤니티를 찾아보세요
              </p>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="커뮤니티 검색..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant={filter === "all" ? "default" : "outline"}
                onClick={() => setFilter("all")}
                className={filter === "all" ? "bg-gradient-primary" : ""}
              >
                전체
              </Button>
              <Button
                variant={filter === "trending" ? "default" : "outline"}
                onClick={() => setFilter("trending")}
                className={filter === "trending" ? "bg-gradient-primary" : ""}
              >
                <TrendingUp className="h-4 w-4 mr-2" />
                인기순
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Communities Grid */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCommunities.map((community) => {
            const Icon = community.icon;
            return (
              <Card key={community.name} className="p-6 hover:shadow-medium transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-lg ${community.color} flex items-center justify-center`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-foreground">
                        j/{community.name}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="h-3 w-3" />
                        <span>{community.members} 멤버</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-green-600 bg-green-50 dark:bg-green-950">
                    {community.trend}
                  </Badge>
                </div>

                <p className="text-sm text-muted-foreground mb-4">
                  {community.description}
                </p>

                <Separator className="mb-4" />

                <Button 
                  className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
                >
                  가입하기
                </Button>
              </Card>
            );
          })}
        </div>

        {filteredCommunities.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">검색 결과가 없습니다.</p>
          </div>
        )}

        {/* Stats */}
        <Card className="mt-8 p-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary">{communities.length}</div>
              <div className="text-sm text-muted-foreground mt-1">총 커뮤니티</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">
                {communities.reduce((sum, c) => sum + parseInt(c.members.replace("k", "")), 0)}k
              </div>
              <div className="text-sm text-muted-foreground mt-1">총 멤버</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">
                {communities.reduce((sum, c) => sum + parseFloat(c.trend.replace(/[+k]/g, "")), 0).toFixed(1)}k
              </div>
              <div className="text-sm text-muted-foreground mt-1">이번 주 신규 가입</div>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default Communities;