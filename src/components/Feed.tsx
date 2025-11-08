import PostCard from "./PostCard";
import { Card } from "@/components/ui/card";
import { TrendingUp, Flame, Sparkles } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "React 19의 새로운 Server Actions 기능을 프로덕션에 적용해봤습니다",
    content: "안녕하세요! 최근 React 19 베타를 회사 프로젝트에 적용해봤는데, Server Actions가 정말 혁신적이더라고요. 기존에 API 라우트로 처리하던 작업들을 훨씬 간단하게 처리할 수 있었습니다. 특히 폼 처리가 정말 편해졌어요.",
    author: "김개발",
    authorInitial: "김",
    community: "개발",
    communityColor: "bg-blue-500",
    initialVotes: 342,
    comments: 67,
    timeAgo: "2시간 전",
  },
  {
    id: 2,
    title: "[질문] 비전공 주니어 개발자 면접 준비 어떻게 하셨나요?",
    content: "국비학원 수료 후 3개월째 취준중입니다. 코딩테스트는 백준 실버는 풀리는데 면접에서 CS 지식 질문에 항상 막히네요. 선배님들은 어떻게 준비하셨는지 궁금합니다. 추천하는 강의나 책 있으실까요?",
    author: "박취준",
    authorInitial: "박",
    community: "커리어",
    communityColor: "bg-green-500",
    initialVotes: 156,
    comments: 89,
    timeAgo: "4시간 전",
  },
  {
    id: 3,
    title: "피그마 디자인 시스템 구축 완벽 가이드 (feat. 실무 경험)",
    content: "2년간 여러 프로젝트에서 디자인 시스템을 구축한 경험을 정리해봤습니다. 컴포넌트 네이밍, 컬러 토큰 관리, 반응형 대응 등 실무에서 겪은 시행착오와 해결 방법을 공유합니다.",
    author: "이디자인",
    authorInitial: "이",
    community: "디자인",
    communityColor: "bg-purple-500",
    initialVotes: 428,
    comments: 52,
    timeAgo: "6시간 전",
  },
  {
    id: 4,
    title: "사이드 프로젝트로 6개월만에 월 매출 500만원 달성했습니다",
    content: "퇴근 후 2시간씩 투자해서 만든 SaaS 서비스가 드디어 수익을 내기 시작했습니다. 아이디어 검증부터 런칭, 마케팅까지의 여정을 솔직하게 공유드립니다. 질문 환영합니다!",
    author: "최창업",
    authorInitial: "최",
    community: "아이디어",
    communityColor: "bg-orange-500",
    initialVotes: 892,
    comments: 143,
    timeAgo: "8시간 전",
  },
  {
    id: 5,
    title: "[리뷰] 로스트아크 신규 레이드 후기 (스포 없음)",
    content: "어제 출시된 신규 레이드 클리어했습니다! 난이도는 에스더무기 기준 상중 정도? 패턴은 익숙해지면 할만한데 처음엔 좀 헷갈리네요. 보상은 준수한 편입니다.",
    author: "정게이머",
    authorInitial: "정",
    community: "게임",
    communityColor: "bg-red-500",
    initialVotes: 234,
    comments: 78,
    timeAgo: "12시간 전",
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
];

const sortOptions = [
  { icon: Flame, label: "인기" },
  { icon: Sparkles, label: "새글" },
  { icon: TrendingUp, label: "급상승" },
];

const Feed = () => {
  return (
    <div className="flex-1 max-w-3xl">
      {/* Sort Options */}
      <Card className="mb-4 p-2">
        <div className="flex gap-2">
          {sortOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <button
                key={index}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                  index === 0
                    ? "bg-secondary text-foreground font-medium"
                    : "text-muted-foreground hover:bg-secondary/50"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="text-sm">{option.label}</span>
              </button>
            );
          })}
        </div>
      </Card>

      {/* Posts Feed */}
      <div className="space-y-3">
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
