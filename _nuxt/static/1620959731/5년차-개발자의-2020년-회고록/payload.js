__NUXT_JSONP__("/5%EB%85%84%EC%B0%A8-%EA%B0%9C%EB%B0%9C%EC%9E%90%EC%9D%98-2020%EB%85%84-%ED%9A%8C%EA%B3%A0%EB%A1%9D", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C){return {data:[{article:{slug:"5년차-개발자의-2020년-회고록",description:"작년 말에 이직했으니 이제 곧 입사한지 1년이 다 되어간다. 근데 체감상 나에게 올 한 해는 \"나 뭐 했지\" 인 것 같다. 분명 기술적으로 굉장히 많이 성장했다.",category:"life",title:"5년차 개발자의 2020년 회고록",thumbnail:"https:\u002F\u002Fimages.unsplash.com\u002Fphoto-1519682337058-a94d519337bc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",updated:s,created:s,is_published:true,toc:[{id:t,depth:j,text:u},{id:v,depth:j,text:w},{id:x,depth:j,text:k}],body:{type:y,children:[{type:b,tag:d,props:{},children:[{type:a,value:z},{type:b,tag:f,props:{},children:[{type:a,value:A}]},{type:a,value:B}]},{type:a,value:c},{type:a,value:c},{type:b,tag:l,props:{id:t},children:[{type:b,tag:i,props:{href:"#%EA%B0%9C%EC%9D%B8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:u}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{alt:h,src:"https:\u002F\u002Fimages.velog.io\u002Fimages\u002Fpeterkimzz\u002Fpost\u002F59f817fb-ddc0-4f93-876f-de3b0ba1f40a\u002Fimage.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"올해 Github에서 정식 버전을 선보인 "},{type:b,tag:f,props:{},children:[{type:a,value:"Actions"}]},{type:a,value:"를 활용해서 AWS 인프라에 CI\u002FCD를 자동화 하는 라이브러리를 배포해서 Actions 치고는 꽤 쏠쏠한 Star도 받았다. Github 자체 검색 엔진에 의해 노출이 되었으니까 말이다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:i,props:{href:"https:\u002F\u002Fgithub.com\u002Fmarketplace\u002Factions\u002Faws-ssm-send-command",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:b,tag:e,props:{},children:[{type:a,value:r}]}]},{type:a,value:"는 Github Actions이 돌아가는 과정에서 AWS 리소스를 원격으로 제어할 수 있어서, "},{type:b,tag:f,props:{},children:[{type:a,value:"자동화"}]},{type:a,value:"에 큰 도움을 줄 수 있는 도구이다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"보통 Github에 코드 푸시 후 CI를 마친 뒤 CD를 위해 CodeBuild, CodeDeploy나 Jenkins같은 툴을 사용하게 되는데, 혼자 개발하는 입장에서 또 새로운 툴을 배우기가 굉장히 버거웠다. 배우려고 했으나 젠킨스는 오래된 UI 탓인지 왠지 모르게 손이 안가더라.."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"그러던 와중 "},{type:b,tag:e,props:{},children:[{type:a,value:"AWS SSM"}]},{type:a,value:" 이라는 것을 접하게 되었는데, 여러 기능이 있지만 나에게 굉장히 충격이었던 것은 바로 "},{type:b,tag:f,props:{},children:[{type:a,value:"EC2 인스턴스에 ssh로 접속하지 않고, 자바스크립트로 EC2 안에 있는 스크립트를 원격으로 대신 실행시키기"}]},{type:a,value:"라는 것이 가능하다는 사실이었다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"지금 생각해보면 당연히 제공이 되었을 것 같은데 바보같이 모르고 있었다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"사용해보니 문제 없이 작동되었고, 이걸 Action으로 만든다면 Github에 코드 푸시를 했을 때 알아서 배포까지 한 번에 되겠네 라는 생각과 함께 만들었던 것 같다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"기존 회사 프로젝트에는 "},{type:b,tag:e,props:{},children:[{type:a,value:"renovate"}]},{type:a,value:" 라는 툴이 이미 적용되어 있었는데, 이 툴을 업데이트 된 패키지가 있으면 계속 감지해서 최신 버전으로 업데이트하라고 PR을 날려주는 툴이다. 심지어 patch 버전 업데이트는 그냥 알아서 master에 merge까지 시켜버린다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:r}]},{type:a,value:"를 적용시키기 전에는 몰랐는데 적용시키고 보니 renovate가 패치 버전을 감지해서 master에 머지해버리면, "},{type:b,tag:e,props:{},children:[{type:a,value:r}]},{type:a,value:" master 브랜치 이벤트를 감지하고, 실제 서버에 배포까지 해버리는 그야말로 소 뒷걸음질 치다 쥐 잡는 격이 되어 버렸다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{alt:h,src:"https:\u002F\u002Fimages.velog.io\u002Fimages\u002Fpeterkimzz\u002Fpost\u002F4cff112a-a82c-4293-97bb-d2762ec221f4\u002F1594182493129-b492166969.jpg"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"개발자로서 카타르시스가 느껴지는 순간이었다."}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"덕분에 주말에도 의존성 패키지가 업데이트 되어 있으면 지들이 알아서 북치고 장구치고 다 한다. 너무 좋다..."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"아무튼 이 라이브러리를 만들고 나서 얼마전 우연히 정부에서 관리하는 공개SW 사업부에서 공모한 "},{type:b,tag:e,props:{},children:[{type:a,value:"오픈소스 활용기 자랑하기 이벤트"}]},{type:a,value:"가 있길래 아무 생각 없이 이 라이브러리로 신청을 했더니, 덜컥 당첨이 되어버렸다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"당첨되면 회사로 치킨 10마리를 보내주고, 나중에 단독 인터뷰가 있다고 하던데 인터뷰는 코로나 때문에 대면으로 하기 어려운 모양이다. 내년 초에 가능할 것 같다고 하셨다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"아무튼 회사로 교촌치킨 10마리 받아서 팀원들이랑 옆 팀에게 나눠주고 감사히 잘 먹었다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{alt:"image",src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F20244536\u002F106996364-311a7300-67c4-11eb-9eb9-0e20b94b67b0.png"},children:[]},{type:a,value:c},{type:b,tag:"em",props:{},children:[{type:a,value:"(내가 넥슨과 삼성전자 다니시는 분들과 어깨를 나란히..!? 😂)"}]}]},{type:a,value:c},{type:b,tag:l,props:{id:v},children:[{type:b,tag:i,props:{href:"#%EC%98%A4%ED%94%88%EC%86%8C%EC%8A%A4-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:w}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"초반 iOS 개발 1년을 제외하면 웹 개발을 시작한지 올해를 다 채우면 4년이 된다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"내년이면 5년차 시작이구나. 근데 이 쯤 되니까 확실히 내가 코딩할 때 달라졌다고 느껴지는 부분이 있다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"예전에는 라이브러리를 가져다 쓸 때 안되면 안되네~ 하고 다른 걸 찾았다면, 지금은 뭔가 안되면 자연스럽게 코드를 열어보게 되었다. 이런 부분에선 "},{type:b,tag:e,props:{},children:[{type:a,value:"typescript"}]},{type:a,value:"가 참 도움이 많이 되었다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"확실히 버그가 있는 부분에 issue를 날리고, 댓글을 주고 받는게 생각보다 재밌더라."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"그러다 최근에 엄청 마음에 드는 프로젝트를 찾았는데, 바로 "},{type:b,tag:e,props:{},children:[{type:a,value:"bunkerized-nginx"}]},{type:a,value:" 라는 프로젝트이다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"이 프로젝트는 정말 대박인게 보안도 보안이지만, "},{type:b,tag:e,props:{},children:[{type:a,value:"letsencrypt"}]},{type:a,value:" 를 자동으로 갱신해준다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{alt:h,src:"https:\u002F\u002Fimages.velog.io\u002Fimages\u002Fpeterkimzz\u002Fpost\u002Fe0d58f9e-1829-4ae5-ad0a-9675381b5f6a\u002F1549860568870-3fec3c8b4b.jpg"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"그게 뭐 대단한거야? 라고 생각할 수 있지만, 실제로 사용해보니까 너무 깔끔하게 원큐로 동작하는 걸 보고 소리를 질렀다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"왜냐면 막상 100% 자동화로 인증서를 끊기지 않게 스크립트를 작성하려면, 스케줄링 때문에 생각보다 어렵다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"어쨌든 최근에 이 라이브러리를 사용하다가 직접 발견한 굉장히 치명적인 문제가 있었다. 바로 카톡이나 슬랙 등에 웹사이트 url을 붙여넣으면 "},{type:b,tag:e,props:{},children:[{type:a,value:"Open graph"}]},{type:a,value:" 데이터가 나오지 않는 문제가 있었다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"심지어 nginx 로그도 찍히지 않아서 디버깅이 굉장히 힘든 상황이었다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"결국 순정 nginx와 비교하면서 하나씩 찾아내는 수 밖에 없었고, 원인은 링크를 붙여넣는 순간 해당 크롤러 봇이 URL을 분석하게 되는 구조였는데 HTTPS 인증서가 "},{type:b,tag:e,props:{},children:[{type:a,value:"TLSv1.2"}]},{type:a,value:"를 지원하지 않는 게 문제였다. (최신은 TLSv1.3이고, 보안 상 권장사항이다.)"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"이 부분을 v1.2와 v1.3을 둘다 설정하니까 잘 작동했다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{alt:h,src:"https:\u002F\u002Fimages.velog.io\u002Fimages\u002Fpeterkimzz\u002Fpost\u002Fe438e24d-4fb3-4a1f-bae0-71f77c421d6e\u002Fimage.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"이걸 고치는 계기로 PR을 처음 날려봤는데, 다행히 잘 merge되서 처음으로 오픈소스에 기여해보는 경험이 되었다. 엄청 뿌듯한 경험이었다."}]},{type:a,value:c},{type:b,tag:l,props:{id:x},children:[{type:b,tag:i,props:{href:"#tailwind-css",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:k}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"원래 나는 코드 작성보다는 예술을 더 좋아하는 탓에, 백엔드보다는 프론트엔드 개발을 좋아한다. 그래서 개발자이지만 UI\u002FUX에 유독 신경을 많이 쓴다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"유료 강의도 사서 들었던 적이 있는데, "},{type:b,tag:e,props:{},children:[{type:a,value:"Refactoring UI"}]},{type:a,value:"라는 e-book 이라고 해야되나? 아무튼 굉장히 퀄리티가 좋은 책이다. YouTube에 강의가 무료로 몇 편 공개되어 있다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"아무래도 스타트업에서만 일을 하다보니 어쩔 수 없이 디자인 리소스가 부족한 상태에서 작업을 많이 해왔는데, 정~말 많은 도움이 되었다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"아무튼 그 책을 쓴 사람들이 "},{type:b,tag:e,props:{},children:[{type:a,value:"Tailwind"}]},{type:a,value:"라는 캐나다 출신들이 만든 팀의 코어 멤버들인데, 그 팀이 사이드 프로젝트로 "},{type:b,tag:e,props:{},children:[{type:a,value:k}]},{type:a,value:"라는 유틸리티를 오픈 소스로 개발했고, 다운로드가 1천만을 넘었다고 한다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"그리고 그것을 활용한 "},{type:b,tag:e,props:{},children:[{type:a,value:"Tailwind UI"}]},{type:a,value:"라는 유료 솔루션도 판매를 했는데 사이드 프로젝트로 무려 200만 달러 (한화 22억 가량)의 수익을 올렸다고 공개했다. 정말 엄청난 성과이다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"이래서 사이드 프로젝트를 하라고 하나보다. 물론 엄청난 틈새 시장 인사이트가 필요하지만 말이다. 영어도 잘 해야겠고.."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{alt:h,src:"https:\u002F\u002Fmedia.vlpt.us\u002Fimages\u002Fpeterkimzz\u002Fpost\u002F2e9187d7-a2f9-4bf7-b869-6c92d3bc141d\u002Fforceui_thumbnail.jpg?w=768"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"나는 이 유틸리티가 너무 마음에 들었던 탓에, 일단은 Vue에서만 사용 가능한 "},{type:b,tag:e,props:{},children:[{type:a,value:"Force UI"}]},{type:a,value:"라는 CSS 프레임워크도 만들어서 올려두었다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"그래서 이 프레임워크를 회사 프로젝트 중 1개에 적용시켰다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"꽤 깔끔하게 UI를 뽑았다고 생각하고, 이 모든 건 모두 Refactoring UI와 Tailwind UI를 적절히 조화시킨 결과라고 생각한다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"지금은 여러 가지 이유로 버전 업데이트를 못하고 있지만, 내년에는 라이브에서 사용할 수 있을 정도로 개선해볼 생각이다."}]},{type:a,value:c}]},excerpt:{type:y,children:[{type:b,tag:d,props:{},children:[{type:a,value:z},{type:b,tag:f,props:{},children:[{type:a,value:A}]},{type:a,value:B}]}]},dir:"\u002Farticles",path:"\u002Farticles\u002F5년차-개발자의-2020년-회고록",extension:".md",createdAt:C,updatedAt:C}}],fetch:{},mutations:void 0}}("text","element","\n","p","code","strong","img","","a",2,"Tailwind CSS","h2","true",-1,"span","icon","icon-link","aws-ssm-send-command","2020-12-14T00:00:00.000Z","개인-프로젝트","개인 프로젝트","오픈소스-프로젝트","오픈소스 프로젝트","tailwind-css","root","작년 말에 이직했으니 이제 곧 입사한지 1년이 다 되어간다. 근데 체감상 나에게 올 한 해는 ","\"나 뭐 했지\""," 인 것 같다. 분명 기술적으로 굉장히 많이 성장했다.","2021-05-14T02:34:35.465Z")));