import { useParams, Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowUp,
  ArrowDown,
  MessageSquare,
  Share2,
  Bookmark,
  ArrowLeft,
} from "lucide-react";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Comment {
  id: number;
  author: string;
  content: string;
  votes: number;
  timeAgo: string;
  replies?: Comment[];
}

const PostDetail = () => {
  const { id } = useParams();
  const [votes, setVotes] = useState(234);
  const [voteStatus, setVoteStatus] = useState<"up" | "down" | null>(null);
  const [commentText, setCommentText] = useState("");

  // 샘플 게시물 데이터
  const post = {
    id: parseInt(id || "1"),
    title: "한국의 아름다운 가을 풍경을 공유합니다",
    content: `안녕하세요! 지난 주말에 남이섬에 다녀왔는데 정말 멋진 가을 풍경을 볼 수 있었습니다.

단풍이 절정이었고, 날씨도 완벽했어요. 사진으로는 그 아름다움을 다 담을 수 없었지만, 여러분과 공유하고 싶어서 올립니다.

추천하는 방문 시간:
1. 오전 10시 - 사람이 적고 빛이 좋음
2. 오후 3시 - 석양 무렵도 아름다움
3. 평일 방문 추천 - 주말은 너무 붐빔

여러분도 가을이 가기 전에 꼭 방문해보세요!`,
    author: "traveler123",
    authorInitial: "T",
    community: "korea",
    communityColor: "bg-blue-500",
    timeAgo: "3시간 전",
    image: "/placeholder.svg",
  };

  const [comments] = useState<Comment[]>([
    {
      id: 1,
      author: "naturelover",
      content:
        "와 정말 아름답네요! 저도 이번 주말에 가보려고 합니다. 혹시 교통편은 어떻게 이용하셨나요?",
      votes: 45,
      timeAgo: "2시간 전",
      replies: [
        {
          id: 11,
          author: "traveler123",
          content:
            "지하철 + 셔틀버스 이용했어요. 가평역에서 셔틀버스 타면 됩니다!",
          votes: 23,
          timeAgo: "1시간 전",
        },
      ],
    },
    {
      id: 2,
      author: "photographer_kim",
      content:
        "사진 잘 보고 갑니다. 저도 사진 찍으러 가야겠어요. 카메라 세팅 정보 공유해주실 수 있나요?",
      votes: 32,
      timeAgo: "1시간 전",
    },
    {
      id: 3,
      author: "seoul_life",
      content: "남이섬 정말 좋죠! 겨울에 눈 내릴 때도 정말 예뻐요.",
      votes: 18,
      timeAgo: "30분 전",
    },
  ]);

  const handleVote = (type: "up" | "down") => {
    if (voteStatus === type) {
      setVotes(234);
      setVoteStatus(null);
    } else {
      if (type === "up") {
        setVotes(voteStatus === "down" ? 236 : 235);
      } else {
        setVotes(voteStatus === "up" ? 232 : 233);
      }
      setVoteStatus(type);
    }
  };

  const CommentItem = ({
    comment,
    isReply = false,
  }: {
    comment: Comment;
    isReply?: boolean;
  }) => {
    const [commentVotes, setCommentVotes] = useState(comment.votes);
    const [commentVoteStatus, setCommentVoteStatus] = useState<
      "up" | "down" | null
    >(null);

    const handleCommentVote = (type: "up" | "down") => {
      if (commentVoteStatus === type) {
        setCommentVotes(comment.votes);
        setCommentVoteStatus(null);
      } else {
        if (type === "up") {
          setCommentVotes(
            commentVoteStatus === "down" ? comment.votes + 2 : comment.votes + 1
          );
        } else {
          setCommentVotes(
            commentVoteStatus === "up" ? comment.votes - 2 : comment.votes - 1
          );
        }
        setCommentVoteStatus(type);
      }
    };

    return (
      <div className={`${isReply ? "ml-8 mt-3" : "mb-4"}`}>
        <div className="flex gap-2">
          <div className="flex flex-col items-center gap-1">
            <button
              onClick={() => handleCommentVote("up")}
              className={`p-0.5 rounded hover:bg-secondary transition-colors ${
                commentVoteStatus === "up"
                  ? "text-accent"
                  : "text-muted-foreground"
              }`}
            >
              <ArrowUp className="h-4 w-4" />
            </button>
            <span
              className={`text-xs font-bold ${
                commentVoteStatus === "up"
                  ? "text-accent"
                  : commentVoteStatus === "down"
                  ? "text-destructive"
                  : "text-foreground"
              }`}
            >
              {commentVotes}
            </span>
            <button
              onClick={() => handleCommentVote("down")}
              className={`p-0.5 rounded hover:bg-secondary transition-colors ${
                commentVoteStatus === "down"
                  ? "text-destructive"
                  : "text-muted-foreground"
              }`}
            >
              <ArrowDown className="h-4 w-4" />
            </button>
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <Avatar className="h-5 w-5">
                <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                  {comment.author[0].toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <span className="text-sm font-semibold text-foreground">
                u/{comment.author}
              </span>
              <span className="text-xs text-muted-foreground">
                {comment.timeAgo}
              </span>
            </div>
            <div className="text-sm text-foreground mb-2 prose prose-sm dark:prose-invert max-w-none">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {comment.content}
              </ReactMarkdown>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <button className="text-xs font-medium hover:text-foreground transition-colors">
                답글
              </button>
              <button className="text-xs font-medium hover:text-foreground transition-colors">
                공유
              </button>
              <button className="text-xs font-medium hover:text-foreground transition-colors">
                신고
              </button>
            </div>

            {comment.replies && comment.replies.length > 0 && (
              <div className="mt-3">
                {comment.replies.map((reply) => (
                  <CommentItem key={reply.id} comment={reply} isReply />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-screen-2xl mx-auto px-4 py-4">
        <div className="flex gap-6">
          <main className="flex-1 max-w-3xl">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4"
            >
              <ArrowLeft className="h-4 w-4" />
              목록으로 돌아가기
            </Link>

            <Card className="overflow-hidden">
              <div className="flex">
                {/* Vote Section */}
                <div className="flex flex-col items-center gap-2 bg-secondary/30 p-3 w-14">
                  <button
                    onClick={() => handleVote("up")}
                    className={`p-1 rounded hover:bg-secondary transition-colors ${
                      voteStatus === "up"
                        ? "text-accent"
                        : "text-muted-foreground"
                    }`}
                  >
                    <ArrowUp className="h-6 w-6" />
                  </button>
                  <span
                    className={`text-base font-bold ${
                      voteStatus === "up"
                        ? "text-accent"
                        : voteStatus === "down"
                        ? "text-destructive"
                        : "text-foreground"
                    }`}
                  >
                    {votes}
                  </span>
                  <button
                    onClick={() => handleVote("down")}
                    className={`p-1 rounded hover:bg-secondary transition-colors ${
                      voteStatus === "down"
                        ? "text-destructive"
                        : "text-muted-foreground"
                    }`}
                  >
                    <ArrowDown className="h-6 w-6" />
                  </button>
                </div>

                {/* Content Section */}
                <div className="flex-1 p-4">
                  {/* Header */}
                  <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                    <Avatar className="h-6 w-6">
                      <AvatarFallback
                        className={`${post.communityColor} text-white text-xs`}
                      >
                        {post.community[0]}
                      </AvatarFallback>
                    </Avatar>
                    <span className="font-semibold text-foreground">
                      r/{post.community}
                    </span>
                    <span>•</span>
                    <span>u/{post.author}</span>
                    <span>•</span>
                    <span>{post.timeAgo}</span>
                  </div>

                  {/* Title */}
                  <h1 className="text-2xl font-bold mb-4 text-foreground">
                    {post.title}
                  </h1>

                  {/* Content */}
                  <div className="text-foreground mb-4 prose prose-sm dark:prose-invert max-w-none">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {post.content}
                    </ReactMarkdown>
                  </div>

                  {/* Image */}
                  {post.image && (
                    <div className="mb-4 rounded-lg overflow-hidden">
                      <img
                        src={post.image}
                        alt="Post content"
                        className="w-full object-cover"
                      />
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex items-center gap-4 text-muted-foreground pt-2 border-t">
                    <button className="flex items-center gap-1.5 px-2 py-1 rounded hover:bg-secondary transition-colors">
                      <MessageSquare className="h-5 w-5" />
                      <span className="text-sm font-medium">
                        {comments.length} 댓글
                      </span>
                    </button>
                    <button className="flex items-center gap-1.5 px-2 py-1 rounded hover:bg-secondary transition-colors">
                      <Share2 className="h-5 w-5" />
                      <span className="text-sm font-medium">공유</span>
                    </button>
                    <button className="flex items-center gap-1.5 px-2 py-1 rounded hover:bg-secondary transition-colors">
                      <Bookmark className="h-5 w-5" />
                      <span className="text-sm font-medium">저장</span>
                    </button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Comment Section */}
            <Card className="mt-4 p-4">
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      U
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium text-foreground">
                    u/guest로 댓글 작성
                  </span>
                </div>
                <Textarea
                  placeholder="생각을 공유해주세요..."
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  className="mb-2"
                />
                <div className="flex justify-end">
                  <Button size="sm">댓글 작성</Button>
                </div>
              </div>

              <div className="border-t pt-4">
                <h3 className="text-sm font-semibold text-foreground mb-4">
                  댓글 {comments.length}개
                </h3>
                {comments.map((comment) => (
                  <CommentItem key={comment.id} comment={comment} />
                ))}
              </div>
            </Card>
          </main>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
