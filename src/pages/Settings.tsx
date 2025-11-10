import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTheme } from "@/components/ThemeProvider";
import { Moon, Sun, Monitor } from "lucide-react";

const Settings = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen w-full bg-background">
      <div className="max-w-screen-2xl mx-auto px-4 py-4">
        <div className="flex gap-6">
          <main className="flex-1 max-w-5xl">
            <Card className="p-6">
              <h1 className="text-2xl font-bold mb-6">설정</h1>

              <Tabs defaultValue="account" className="w-full">
                <TabsList className="w-full justify-start mb-6">
                  <TabsTrigger value="account">계정</TabsTrigger>
                  <TabsTrigger value="appearance">테마</TabsTrigger>
                  <TabsTrigger value="notifications">알림</TabsTrigger>
                  <TabsTrigger value="privacy">개인정보</TabsTrigger>
                </TabsList>

                {/* 계정 설정 */}
                <TabsContent value="account" className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">프로필 정보</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="username">사용자 이름</Label>
                        <Input id="username" placeholder="홍길동" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">이메일</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="hong@example.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="bio">자기소개</Label>
                        <Input
                          id="bio"
                          placeholder="간단한 자기소개를 입력하세요"
                        />
                      </div>
                      <Button>변경사항 저장</Button>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      비밀번호 변경
                    </h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="current-password">현재 비밀번호</Label>
                        <Input id="current-password" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="new-password">새 비밀번호</Label>
                        <Input id="new-password" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">비밀번호 확인</Label>
                        <Input id="confirm-password" type="password" />
                      </div>
                      <Button>비밀번호 변경</Button>
                    </div>
                  </div>
                </TabsContent>

                {/* 테마 설정 */}
                <TabsContent value="appearance" className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">테마 설정</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      사이트의 표시 방식을 선택하세요
                    </p>

                    <div className="grid grid-cols-3 gap-4">
                      <button
                        onClick={() => setTheme("light")}
                        className={`p-4 border rounded-lg flex flex-col items-center gap-2 transition-colors ${
                          theme === "light"
                            ? "border-primary bg-secondary"
                            : "hover:bg-secondary/50"
                        }`}
                      >
                        <Sun className="h-6 w-6" />
                        <span className="text-sm font-medium">라이트</span>
                      </button>

                      <button
                        onClick={() => setTheme("dark")}
                        className={`p-4 border rounded-lg flex flex-col items-center gap-2 transition-colors ${
                          theme === "dark"
                            ? "border-primary bg-secondary"
                            : "hover:bg-secondary/50"
                        }`}
                      >
                        <Moon className="h-6 w-6" />
                        <span className="text-sm font-medium">다크</span>
                      </button>

                      <button
                        onClick={() => setTheme("system")}
                        className={`p-4 border rounded-lg flex flex-col items-center gap-2 transition-colors ${
                          theme === "system"
                            ? "border-primary bg-secondary"
                            : "hover:bg-secondary/50"
                        }`}
                      >
                        <Monitor className="h-6 w-6" />
                        <span className="text-sm font-medium">시스템</span>
                      </button>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-semibold mb-4">디스플레이</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label>컴팩트 모드</Label>
                          <p className="text-sm text-muted-foreground">
                            게시물을 더 촘촘하게 표시
                          </p>
                        </div>
                        <Switch />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label>자동 재생</Label>
                          <p className="text-sm text-muted-foreground">
                            동영상 자동 재생
                          </p>
                        </div>
                        <Switch />
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* 알림 설정 */}
                <TabsContent value="notifications" className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">알림 설정</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label>댓글 알림</Label>
                          <p className="text-sm text-muted-foreground">
                            내 게시물에 댓글이 달릴 때
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label>좋아요 알림</Label>
                          <p className="text-sm text-muted-foreground">
                            내 게시물에 좋아요가 눌릴 때
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label>메시지 알림</Label>
                          <p className="text-sm text-muted-foreground">
                            새 메시지를 받을 때
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label>이메일 알림</Label>
                          <p className="text-sm text-muted-foreground">
                            중요 알림을 이메일로 받기
                          </p>
                        </div>
                        <Switch />
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* 개인정보 설정 */}
                <TabsContent value="privacy" className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      개인정보 보호
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label>프로필 공개</Label>
                          <p className="text-sm text-muted-foreground">
                            다른 사용자가 내 프로필을 볼 수 있음
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label>활동 표시</Label>
                          <p className="text-sm text-muted-foreground">
                            최근 활동을 프로필에 표시
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label>검색 허용</Label>
                          <p className="text-sm text-muted-foreground">
                            검색 엔진에 내 프로필 노출
                          </p>
                        </div>
                        <Switch />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-destructive">
                      위험 구역
                    </h3>
                    <div className="space-y-4">
                      <div className="p-4 border border-destructive rounded-lg">
                        <h4 className="font-medium mb-2">계정 삭제</h4>
                        <p className="text-sm text-muted-foreground mb-4">
                          계정을 삭제하면 모든 데이터가 영구적으로 삭제됩니다.
                        </p>
                        <Button variant="destructive">계정 삭제</Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </Card>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Settings;
