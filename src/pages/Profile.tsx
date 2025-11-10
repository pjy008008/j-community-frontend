import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Link as LinkIcon, Award } from "lucide-react";
import PostCard from "@/components/PostCard";

const userPosts = [
  {
    id: 1,
    title: "React 18의 새로운 기능들",
    content: "React 18에서 추가된 주요 기능들을 알아봅시다.",
    author: "홍길동",
    authorInitial: "홍",
    community: "개발",
    communityColor: "bg-blue-500",
    initialVotes: 245,
    comments: 32,
    timeAgo: "2시간 전",
  },
  {
    id: 2,
    title: "프론트엔드 개발자 로드맵 2024",
    content: "2024년 프론트엔드 개발자가 알아야 할 기술 스택",
    author: "홍길동",
    authorInitial: "홍",
    community: "커리어",
    communityColor: "bg-green-500",
    initialVotes: 189,
    comments: 45,
    timeAgo: "1일 전",
  },
];

const Profile = () => {
  return (
    <div className="min-h-screen w-full bg-background">
      <div className="max-w-screen-2xl mx-auto px-4 py-4">
        <div className="flex gap-6">
          <main className="flex-1 max-w-5xl">
            <Card className="p-6 mb-6">
              {/* 프로필 헤더 */}
              <div className="flex items-start gap-6 mb-6">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="" />
                  <AvatarFallback className="text-2xl">홍</AvatarFallback>
                </Avatar>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-2xl font-bold">홍길동</h1>
                    <Badge>Pro 멤버</Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    안녕하세요! 웹 개발에 관심이 많은 개발자입니다.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>2023년 3월 가입</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>서울, 대한민국</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <LinkIcon className="h-4 w-4" />
                      <a href="#" className="text-primary hover:underline">github.com/hongkildong</a>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button>프로필 수정</Button>
                    <Button variant="outline">공유</Button>
                  </div>
                </div>
              </div>
              
              {/* 통계 */}
              <div className="grid grid-cols-4 gap-4 pt-6 border-t">
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">1,234</p>
                  <p className="text-sm text-muted-foreground">포인트</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">87</p>
                  <p className="text-sm text-muted-foreground">게시물</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">432</p>
                  <p className="text-sm text-muted-foreground">댓글</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">15</p>
                  <p className="text-sm text-muted-foreground">배지</p>
                </div>
              </div>
            </Card>
            
            {/* 탭 컨텐츠 */}
            <Tabs defaultValue="posts" className="w-full">
              <TabsList className="w-full justify-start">
                <TabsTrigger value="posts">게시물</TabsTrigger>
                <TabsTrigger value="comments">댓글</TabsTrigger>
                <TabsTrigger value="saved">저장됨</TabsTrigger>
                <TabsTrigger value="badges">배지</TabsTrigger>
              </TabsList>
              
              <TabsContent value="posts" className="space-y-4 mt-4">
                {userPosts.map((post) => (
                  <PostCard key={post.id} {...post} />
                ))}
              </TabsContent>
              
              <TabsContent value="comments" className="mt-4">
                <Card className="p-8 text-center">
                  <p className="text-muted-foreground">작성한 댓글이 여기에 표시됩니다</p>
                </Card>
              </TabsContent>
              
              <TabsContent value="saved" className="mt-4">
                <Card className="p-8 text-center">
                  <p className="text-muted-foreground">저장한 게시물이 여기에 표시됩니다</p>
                </Card>
              </TabsContent>
              
              <TabsContent value="badges" className="mt-4">
                <Card className="p-6">
                  <div className="grid grid-cols-3 gap-4">
                    {[1, 2, 3, 4, 5, 6].map((badge) => (
                      <div key={badge} className="flex flex-col items-center gap-2 p-4 border rounded-lg">
                        <Award className="h-8 w-8 text-primary" />
                        <p className="text-sm font-medium">배지 {badge}</p>
                        <p className="text-xs text-muted-foreground text-center">
                          특정 조건 달성
                        </p>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Profile;
