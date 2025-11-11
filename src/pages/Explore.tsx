import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Search,
  Compass,
  Code,
  Palette,
  Briefcase,
  Gamepad2,
  Utensils,
  Music,
  Camera,
  BookOpen,
} from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    icon: Code,
    name: "개발",
    count: "125k",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Palette,
    name: "디자인",
    count: "82k",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: Briefcase,
    name: "커리어",
    count: "153k",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: Gamepad2,
    name: "게임",
    count: "97k",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    icon: Utensils,
    name: "음식",
    count: "64k",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    icon: Music,
    name: "음악",
    count: "58k",
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
  },
  {
    icon: Camera,
    name: "사진",
    count: "71k",
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
  },
  {
    icon: BookOpen,
    name: "책",
    count: "45k",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
];

const trendingTopics = [
  { name: "인공지능", posts: "1.2k개 게시물" },
  { name: "리액트", posts: "890개 게시물" },
  { name: "취업준비", posts: "2.3k개 게시물" },
  { name: "스타트업", posts: "1.5k개 게시물" },
  { name: "원격근무", posts: "780개 게시물" },
];

const Explore = () => {
  return (
    <div className="flex-1 max-w-3xl">
      <div className="max-w-3xl mx-auto px-2 py-6">
        <div className="flex gap-6">
          <main className="flex-1 max-w-3xl">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <Compass className="h-8 w-8 text-primary" />
                <h1 className="text-3xl font-bold">탐색</h1>
              </div>
              <p className="text-muted-foreground">
                새로운 커뮤니티와 주제를 발견해보세요
              </p>
            </div>

            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input placeholder="커뮤니티, 주제 검색..." className="pl-10" />
            </div>

            <Tabs defaultValue="communities" className="mb-6">
              <TabsList>
                <TabsTrigger value="communities">커뮤니티</TabsTrigger>
                <TabsTrigger value="topics">주제</TabsTrigger>
              </TabsList>

              <TabsContent value="communities" className="space-y-4 mt-6">
                <h2 className="text-xl font-semibold mb-4">인기 카테고리</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {categories.map((category, index) => {
                    const Icon = category.icon;
                    return (
                      <Link to={`/community/${category.name}`}>
                        <Card
                          key={index}
                          className="p-4 hover:shadow-md transition-shadow cursor-pointer"
                        >
                          <div className="flex items-center gap-4">
                            <div
                              className={`p-3 rounded-lg ${category.bgColor}`}
                            >
                              <Icon className={`h-6 w-6 ${category.color}`} />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-lg">
                                j/{category.name}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                {category.count} 멤버
                              </p>
                            </div>
                          </div>
                        </Card>
                      </Link>
                    );
                  })}
                </div>
              </TabsContent>

              <TabsContent value="topics" className="space-y-4 mt-6">
                <h2 className="text-xl font-semibold mb-4">트렌딩 주제</h2>
                <div className="space-y-3">
                  {trendingTopics.map((topic, index) => (
                    <Card
                      key={index}
                      className="p-4 hover:bg-secondary/50 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold">#{topic.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {topic.posts}
                          </p>
                        </div>
                        <div className="text-2xl font-bold text-muted-foreground">
                          {index + 1}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Explore;
