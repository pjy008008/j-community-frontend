import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 pt-10 pb-8 max-w-4xl">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            홈으로 돌아가기
          </Button>
        </Link>

        <Card className="p-8">
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                이용약관
              </h1>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>최종 업데이트: 2025년 11월 13일</span>
              </div>
            </div>

            <div className="space-y-6 text-foreground">
              <section>
                <h2 className="text-xl font-bold mb-3">1. 서비스 이용</h2>
                <p className="text-muted-foreground leading-relaxed">
                  본 서비스는 커뮤니티 기반 플랫폼으로, 사용자는 다양한 주제의
                  커뮤니티에 참여하여 의견을 공유하고 토론할 수 있습니다. 서비스
                  이용 시 커뮤니티 가이드라인을 준수해야 합니다.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">2. 계정 관리</h2>
                <p className="text-muted-foreground leading-relaxed">
                  사용자는 본인의 계정 정보를 안전하게 관리할 책임이 있습니다.
                  계정 정보의 무단 사용이 의심되는 경우 즉시 고객센터에
                  알려주시기 바랍니다.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">3. 콘텐츠 게시</h2>
                <p className="text-muted-foreground leading-relaxed">
                  사용자가 게시하는 모든 콘텐츠는 관련 법령을 준수해야 하며,
                  타인의 권리를 침해하거나 불법적인 내용을 포함할 수 없습니다.
                  운영진은 부적절한 콘텐츠를 삭제하거나 사용자 계정을 제한할 수
                  있습니다.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">4. 지적재산권</h2>
                <p className="text-muted-foreground leading-relaxed">
                  플랫폼의 디자인, 로고, 기능 등 모든 지적재산권은 J-Community에
                  귀속됩니다. 사용자가 게시한 콘텐츠의 저작권은 해당 사용자에게
                  있으나, 플랫폼 내에서 콘텐츠를 사용할 수 있는 권한을
                  부여합니다.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">
                  5. 서비스 변경 및 중단
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  운영진은 서비스의 개선을 위해 사전 고지 없이 서비스 내용을
                  변경하거나 일시적으로 중단할 수 있습니다. 중대한 변경 사항은
                  사전에 공지합니다.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">6. 면책 조항</h2>
                <p className="text-muted-foreground leading-relaxed">
                  J-Community은 사용자 간의 거래나 사용자가 게시한 정보의
                  정확성에 대해 책임을 지지 않습니다. 서비스 이용 중 발생하는
                  문제에 대한 책임은 사용자에게 있습니다.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">7. 약관 변경</h2>
                <p className="text-muted-foreground leading-relaxed">
                  본 약관은 필요에 따라 변경될 수 있으며, 변경 사항은 플랫폼을
                  통해 공지됩니다. 변경된 약관에 동의하지 않는 경우 서비스
                  이용을 중단할 수 있습니다.
                </p>
              </section>
            </div>

            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                문의사항이 있으시면 고객센터로 연락주시기 바랍니다.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Terms;
