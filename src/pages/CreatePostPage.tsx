import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { ImagePlus, X } from "lucide-react";

const CreatePostPage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [community, setCommunity] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const communities = [
    { id: "career", name: "j/커리어" },
    { id: "programming", name: "j/개발" },
    { id: "game", name: "j/게임" },
    { id: "music", name: "j/음악" },
    { id: "movies", name: "j/영화" },
    { id: "design", name: "j/디자인" },
    { id: "startup", name: "j/창업" },
  ];

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "파일 크기 초과",
          description: "이미지는 5MB 이하여야 합니다.",
          variant: "destructive",
        });
        return;
      }
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImageFile(null);
    setImagePreview(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) {
      toast({
        title: "제목을 입력해주세요",
        variant: "destructive",
      });
      return;
    }

    if (!content.trim()) {
      toast({
        title: "내용을 입력해주세요",
        variant: "destructive",
      });
      return;
    }

    if (!community) {
      toast({
        title: "커뮤니티를 선택해주세요",
        variant: "destructive",
      });
      return;
    }

    // TODO: 실제 게시물 생성 로직 (백엔드 연동)
    toast({
      title: "게시물이 작성되었습니다",
      description: `${community}에 게시물이 성공적으로 등록되었습니다.`,
    });

    // 홈으로 이동
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div className="flex-1 max-w-3xl">
      <div className="max-w-3xl mx-auto px-4 py-6">
        <Card className="p-6">
          <h1 className="text-2xl font-bold mb-6">게시물 작성</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="community">커뮤니티 선택</Label>
              <Select value={community} onValueChange={setCommunity}>
                <SelectTrigger id="community">
                  <SelectValue placeholder="커뮤니티를 선택하세요" />
                </SelectTrigger>
                <SelectContent>
                  {communities.map((comm) => (
                    <SelectItem key={comm.id} value={comm.name}>
                      {comm.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="title">제목</Label>
              <Input
                id="title"
                placeholder="제목을 입력하세요"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                maxLength={300}
              />
              <p className="text-xs text-muted-foreground">
                {title.length}/300
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">내용</Label>
              <Textarea
                id="content"
                placeholder="내용을 입력하세요"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="min-h-[200px]"
                maxLength={10000}
              />
              <p className="text-xs text-muted-foreground">
                {content.length}/10000
              </p>
            </div>

            <div className="space-y-2">
              <Label>이미지 (선택사항)</Label>
              {!imagePreview ? (
                <label
                  htmlFor="image-upload"
                  className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-border rounded-md cursor-pointer hover:bg-accent/50 transition-colors"
                >
                  <ImagePlus className="w-8 h-8 mb-2 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    클릭하여 이미지 업로드
                  </span>
                  <span className="text-xs text-muted-foreground mt-1">
                    PNG, JPG (최대 5MB)
                  </span>
                  <input
                    id="image-upload"
                    type="file"
                    accept="image/png,image/jpeg,image/jpg"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>
              ) : (
                <div className="relative">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-64 object-cover rounded-md"
                  />
                  <Button
                    type="button"
                    variant="destructive"
                    size="icon"
                    className="absolute top-2 right-2"
                    onClick={removeImage}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="submit" className="flex-1">
                게시하기
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate("/")}
              >
                취소
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default CreatePostPage;
