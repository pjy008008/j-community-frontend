import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import PostCard from "@/components/PostCard";

import { 
  ArrowLeft, 
  Users, 
  TrendingUp,
  Calendar,
  Flame,
  Sparkles,
  Code,
  Briefcase,
  Palette,
  Gamepad2,
  Rocket,
  BookOpen,
  Music,
  Camera,
  Heart,
  Utensils
} from "lucide-react";

const communityData: Record<string, any> = {
  "개발": {
    name: "개발",
    description: "프로그래밍, 웹/앱 개발, 코딩 관련 커뮤니티",
    members: "125k",
    online: "12.5k",
    created: "2022년 1월",
    icon: Code,
    color: "bg-blue-500",
    posts: [
      {
        id: 1,
        title: "React 19의 새로운 Server Actions 기능을 프로덕션에 적용해봤습니다",
        content: "안녕하세요! 최근 React 19 베타를 회사 프로젝트에 적용해봤는데, Server Actions가 정말 혁신적이더라고요. 기존에 API 라우트로 처리하던 작업들을 훨씬 간단하게 처리할 수 있었습니다.",
        author: "김개발",
        authorInitial: "김",
        community: "개발",
        communityColor: "bg-blue-500",
        initialVotes: 342,
        comments: 67,
        timeAgo: "2시간 전",
      },
      {
        id: 6,
        title: "TypeScript 5.3 업데이트 내용 정리 (한글 번역)",
        content: "TypeScript 5.3 정식 릴리즈 되었습니다! Import Attributes, 개선된 타입 추론 등 주요 변경사항을 한글로 정리해봤어요. 마이그레이션 가이드도 포함했습니다.",
        author: "강타입",
        authorInitial: "강",
        community: "개발",
        communityColor: "bg-blue-500",
        initialVotes: 567,
        comments: 34,
        timeAgo: "1일 전",
      },
    ]
  },
  "커리어": {
    name: "커리어",
    description: "취업, 이직, 커리어 성장에 관한 이야기",
    members: "153k",
    online: "15.3k",
    created: "2021년 11월",
    icon: Briefcase,
    color: "bg-purple-500",
    posts: [
      {
        id: 2,
        title: "[질문] 비전공 주니어 개발자 면접 준비 어떻게 하셨나요?",
        content: "국비학원 수료 후 3개월째 취준중입니다. 코딩테스트는 백준 실버는 풀리는데 면접에서 CS 지식 질문에 항상 막히네요. 선배님들은 어떻게 준비하셨는지 궁금합니다.",
        author: "박취준",
        authorInitial: "박",
        community: "커리어",
        communityColor: "bg-purple-500",
        initialVotes: 156,
        comments: 89,
        timeAgo: "4시간 전",
      },
    ]
  },
  "디자인": {
    name: "디자인",
    description: "UI/UX, 그래픽 디자인, 크리에이티브",
    members: "82k",
    online: "8.2k",
    created: "2022년 3월",
    icon: Palette,
    color: "bg-pink-500",
    posts: [
      {
        id: 3,
        title: "피그마 디자인 시스템 구축 완벽 가이드 (feat. 실무 경험)",
        content: "2년간 여러 프로젝트에서 디자인 시스템을 구축한 경험을 정리해봤습니다. 컴포넌트 네이밍, 컬러 토큰 관리, 반응형 대응 등 실무에서 겪은 시행착오와 해결 방법을 공유합니다.",
        author: "이디자인",
        authorInitial: "이",
        community: "디자인",
        communityColor: "bg-pink-500",
        initialVotes: 428,
        comments: 52,
        timeAgo: "6시간 전",
      },
    ]
  },
  "게임": {
    name: "게임",
    description: "게임 리뷰, 공략, 게이머들의 소통 공간",
    members: "97k",
    online: "9.7k",
    created: "2021년 12월",
    icon: Gamepad2,
    color: "bg-green-500",
    posts: [
      {
        id: 5,
        title: "[리뷰] 로스트아크 신규 레이드 후기 (스포 없음)",
        content: "어제 출시된 신규 레이드 클리어했습니다! 난이도는 에스더무기 기준 상중 정도? 패턴은 익숙해지면 할만한데 처음엔 좀 헷갈리네요. 보상은 준수한 편입니다.",
        author: "정게이머",
        authorInitial: "정",
        community: "게임",
        communityColor: "bg-green-500",
        initialVotes: 234,
        comments: 78,
        timeAgo: "12시간 전",
      },
    ]
  },
  "창업": {
    name: "창업",
    description: "스타트업, 사업 아이디어, 기업가 정신",
    members: "64k",
    online: "6.4k",
    created: "2022년 5월",
    icon: Rocket,
    color: "bg-orange-500",
    posts: [
      {
        id: 4,
        title: "사이드 프로젝트로 6개월만에 월 매출 500만원 달성했습니다",
        content: "퇴근 후 2시간씩 투자해서 만든 SaaS 서비스가 드디어 수익을 내기 시작했습니다. 아이디어 검증부터 런칭, 마케팅까지의 여정을 솔직하게 공유드립니다. 질문 환영합니다!",
        author: "최창업",
        authorInitial: "최",
        community: "창업",
        communityColor: "bg-orange-500",
        initialVotes: 892,
        comments: 143,
        timeAgo: "8시간 전",
      },
    ]
  },
  "독서": {
    name: "독서",
    description: "책 추천, 독후감, 독서 모임",
    members: "48k",
    online: "4.8k",
    created: "2022년 7월",
    icon: BookOpen,
    color: "bg-yellow-500",
    posts: []
  },
  "음악": {
    name: "음악",
    description: "음악 감상, 악기, 음악 제작",
    members: "71k",
    online: "7.1k",
    created: "2022년 2월",
    icon: Music,
    color: "bg-red-500",
    posts: []
  },
  "사진": {
    name: "사진",
    description: "사진 촬영 기법, 작품 공유, 카메라 리뷰",
    members: "56k",
    online: "5.6k",
    created: "2022년 4월",
    icon: Camera,
    color: "bg-indigo-500",
    posts: []
  },
  "건강": {
    name: "건강",
    description: "운동, 다이어트, 건강 관리",
    members: "89k",
    online: "8.9k",
    created: "2021년 10월",
    icon: Heart,
    color: "bg-rose-500",
    posts: []
  },
  "요리": {
    name: "요리",
    description: "레시피 공유, 맛집 추천, 요리 팁",
    members: "62k",
    online: "6.2k",
    created: "2022년 6월",
    icon: Utensils,
    color: "bg-amber-500",
    posts: []
  },
};

const sortOptions = [
  { icon: Flame, label: "인기" },
  { icon: Sparkles, label: "새글" },
  { icon: TrendingUp, label: "급상승" },
];

const CommunityDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [sortBy, setSortBy] = useState(0);
  
  const community = communityData[id || "개발"] || communityData["개발"];
  const Icon = community.icon;

  return (
    <div className="min-h-screen w-full bg-background">
      <div className="container mx-auto px-4">
        <div className="flex gap-6">
          <main className="flex-1 max-w-3xl">
            {/* Community Header */}
            <Card className="mb-4 overflow-hidden">
              {/* Banner */}
              <div className={`h-24 ${community.color}`} />
              
              {/* Info */}
              <div className="p-4">
                <div className="flex items-start gap-4 -mt-8 mb-4">
                  <Avatar className="h-20 w-20 border-4 border-background">
                    <AvatarFallback className={`${community.color} text-white text-2xl`}>
                      <Icon className="h-10 w-10" />
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 mt-8">
                    <h1 className="text-2xl font-bold text-foreground mb-1">
                      j/{community.name}
                    </h1>
                    <p className="text-sm text-muted-foreground">
                      {community.description}
                    </p>
                  </div>
                  
                  <Button className="bg-gradient-primary hover:opacity-90 transition-opacity mt-8">
                    가입하기
                  </Button>
                </div>
                
                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-foreground font-semibold">{community.members}</span>
                    <span className="text-muted-foreground">멤버</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    <span className="text-foreground font-semibold">{community.online}</span>
                    <span className="text-muted-foreground">온라인</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{community.created} 설립</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Sort Options */}
            <Card className="mb-4 p-2">
              <div className="flex gap-2">
                {sortOptions.map((option, index) => {
                  const SortIcon = option.icon;
                  return (
                    <button
                      key={index}
                      onClick={() => setSortBy(index)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                        sortBy === index
                          ? "bg-secondary text-foreground font-medium"
                          : "text-muted-foreground hover:bg-secondary/50"
                      }`}
                    >
                      <SortIcon className="h-4 w-4" />
                      <span className="text-sm">{option.label}</span>
                    </button>
                  );
                })}
              </div>
            </Card>

            {/* Posts */}
            <div className="space-y-3">
              {community.posts.length > 0 ? (
                community.posts.map((post: any) => (
                  <PostCard key={post.id} {...post} />
                ))
              ) : (
                <Card className="p-12 text-center">
                  <p className="text-muted-foreground">아직 게시물이 없습니다.</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    첫 번째 게시물을 작성해보세요!
                  </p>
                </Card>
              )}
            </div>
          </main>

          {/* Right Sidebar - Community Info */}
          <aside className="hidden xl:block w-80 h-[calc(100vh-4rem)] sticky top-20 space-y-4 overflow-y-auto scrollbar-hide">
            <Card className="p-4">
              <h3 className="font-bold text-foreground mb-3">커뮤니티 정보</h3>
              
              <p className="text-sm text-muted-foreground mb-4">
                {community.description}
              </p>
              
              <Separator className="mb-4" />
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">멤버</span>
                  <span className="font-semibold text-foreground">{community.members}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">온라인</span>
                  <span className="font-semibold text-foreground">{community.online}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">설립</span>
                  <span className="font-semibold text-foreground">{community.created}</span>
                </div>
              </div>
              
              <Separator className="my-4" />
              
              <Link to="/submit">
                <Button className="w-full bg-gradient-primary hover:opacity-90 transition-opacity">
                  게시물 작성
                </Button>
              </Link>
            </Card>

            <Card className="p-4">
              <h3 className="font-bold text-foreground mb-3">커뮤니티 규칙</h3>
              
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-foreground">1. 존중과 배려</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    모든 멤버를 존중하고 배려해주세요
                  </p>
                </div>
                <Separator />
                <div>
                  <div className="font-medium text-foreground">2. 양질의 콘텐츠</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    주제에 맞는 유익한 콘텐츠를 공유해주세요
                  </p>
                </div>
                <Separator />
                <div>
                  <div className="font-medium text-foreground">3. 스팸 금지</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    광고나 스팸성 게시물은 금지됩니다
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-4">
              <Link to="/communities">
                <Button variant="ghost" className="w-full text-primary">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  모든 커뮤니티 보기
                </Button>
              </Link>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default CommunityDetail;