__NUXT_JSONP__("/vuejs%EB%A1%9C-%ED%81%AC%EB%A1%AC-%ED%99%95%EC%9E%A5-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%A8-%EB%A7%8C%EB%93%A4%EA%B8%B0-%EA%B0%95%EC%9D%98-2%EB%B6%80", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH){return {data:[{article:{slug:"vuejs로-크롬-확장-프로그램-만들기-강의-2부",description:"이전 포스팅에서 index.html과 manifest.json 파일을 이용해서 확장 프로그램을 개발자 모드로 실행시키는 것 까지 진행했습니다.\n이번 포스팅에서는 Vue.js와 Vite을 사용해서 프로젝트를 재설계해보도록 하겠습니다.\nVue.js\nVue.js는 웹사이트를 만들기 위해 고안된 프레임워크입니다. 그냥 순수 HTML을 작성하는 것 보다 개발자에게 훨씬 더 많은 이점을 가져다주기 때문에 사용합니다.",category:"tech",title:"Vue.js로 크롬 확장 프로그램 만들기 강의 - 2부",updated:aa,created:aa,is_published:true,toc:[{id:M,depth:F,text:G},{id:ab,depth:F,text:ac},{id:ad,depth:F,text:ae},{id:af,depth:F,text:ag},{id:ah,depth:F,text:ai}],body:{type:aj,children:[{type:b,tag:g,props:{},children:[{type:b,tag:ak,props:{to:al},children:[{type:a,value:am}]},{type:a,value:an},{type:b,tag:f,props:{},children:[{type:a,value:ao}]},{type:a,value:ap},{type:b,tag:f,props:{},children:[{type:a,value:J}]},{type:a,value:aq}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:ar}]},{type:a,value:e},{type:b,tag:z,props:{id:M},children:[{type:b,tag:p,props:{href:as,ariaHidden:A,tabIndex:B},children:[{type:b,tag:c,props:{className:[C,D]},children:[]}]},{type:a,value:G}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:b,tag:p,props:{href:at,rel:[N,O,P],target:Q},children:[{type:a,value:G}]},{type:a,value:au}]},{type:a,value:e},{type:a,value:e},{type:b,tag:av,props:{},children:[{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"Vue.js: The Progressive JavaScript Framework"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"이 Vue.js를 프로젝트에 제대로 구현하려면 사실 프론트엔드 지식이 많이 필요합니다. "},{type:b,tag:f,props:{},children:[{type:a,value:"Webpack"}]},{type:a,value:"이나 "},{type:b,tag:f,props:{},children:[{type:a,value:"Rollup"}]},{type:a,value:"같은 번들러 사용법과, 자바스크립트 모듈 시스템에 대한 이해가 필요하기 때문입니다."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"하지만 걱정마세요. 우리는 남들이 만든 좋은 툴을 그저 가져다 사용하면 됩니다. 물론 나중에는 이게 왜 작동하는지 내부 구조나 기술들을 알고 계셔야 합니다만, 아마 아주 나중에 저절로 관심이 생기실테니 그 때 공부해보시길 바랍니다."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"제가 소개할 남들이 만든 툴은 바로 "},{type:b,tag:p,props:{href:"https:\u002F\u002Fvitejs.dev\u002F",rel:[N,O,P],target:Q},children:[{type:a,value:"Vite"}]},{type:a,value:R}]},{type:a,value:e},{type:b,tag:av,props:{},children:[{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"Vite: Next Generation Frontend Tooling"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"문서에 따르면 빗 이라고 읽으면 된답니다. 불어로 "},{type:b,tag:f,props:{},children:[{type:a,value:"빠른"}]},{type:a,value:" 이라는 뜻입니다."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"Vite을 사용하면 복잡한 설정들을 직접 구현할 필요가 없습니다. 그리고 Vue 만을 위한 툴은 아니고, "},{type:b,tag:S,props:{},children:[{type:a,value:"React"}]},{type:a,value:"나 "},{type:b,tag:S,props:{},children:[{type:a,value:"Svelte"}]},{type:a,value:"같은 다른 프레임워크도 모두 제공합니다."}]},{type:a,value:e},{type:b,tag:z,props:{id:ab},children:[{type:b,tag:p,props:{href:"#%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%83%88%EB%A1%9C-%EA%B5%AC%EC%84%B1%ED%95%98%EA%B8%B0",ariaHidden:A,tabIndex:B},children:[{type:b,tag:c,props:{className:[C,D]},children:[]}]},{type:a,value:ac}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"일단 기존에 만들었던 "},{type:b,tag:f,props:{},children:[{type:a,value:"vue-extension"}]},{type:a,value:" 디렉토리는 지워주세요. vite를 이용해 새로 구성할겁니다."}]},{type:a,value:e},{type:b,tag:t,props:{className:[u]},children:[{type:b,tag:v,props:{className:[w,T]},children:[{type:b,tag:f,props:{},children:[{type:a,value:U},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:K}]},{type:a,value:" init @vitejs\u002Fapp vue-extension\n"}]}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"터미널이 몇 가지 물어볼텐데, "},{type:b,tag:f,props:{},children:[{type:a,value:"vue"}]},{type:a,value:aw},{type:b,tag:f,props:{},children:[{type:a,value:"javascript"}]},{type:a,value:"를 선택해주세요."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"정상적으로 진행이 되었다면 해당 디렉토리로 이동 후, 패키지를 설치해줍니다."}]},{type:a,value:e},{type:b,tag:t,props:{className:[u]},children:[{type:b,tag:v,props:{className:[w,T]},children:[{type:b,tag:f,props:{},children:[{type:a,value:U},{type:b,tag:c,props:{className:[d,"builtin","class-name"]},children:[{type:a,value:"cd"}]},{type:a,value:" vue-extension\n$ "},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:K}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:ax}]},{type:a,value:"\n$ "},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:K}]},{type:a,value:" run dev\n"}]}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"이렇게 까지 하면 Vite이 "},{type:b,tag:f,props:{},children:[{type:a,value:ay}]},{type:a,value:" 주소로 개발 서버를 열어줍겁니다. 브라우저를 통해 접속해보세요."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:b,tag:az,props:{alt:aA,src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F20244536\u002F118081940-48867f00-b3f7-11eb-860e-f74ab318f7e5.png"},children:[]}]},{type:a,value:e},{type:b,tag:z,props:{id:ad},children:[{type:b,tag:p,props:{href:"#%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EA%B5%AC%EC%A1%B0",ariaHidden:A,tabIndex:B},children:[{type:b,tag:c,props:{className:[C,D]},children:[]}]},{type:a,value:ae}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"자바스크립트 프로젝트라면 반드시 필요한 파일이 있습니다. 바로 "},{type:b,tag:f,props:{},children:[{type:a,value:x}]},{type:a,value:" 입니다. 이 파일은 현재 이 디렉토리가 자바스크립트 프로젝트라는 걸 의미합니다. 또한 이 파일에 프로젝트 이름이나 버전, 외부 패키지 이름들을 적어줄 수 있습니다."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"그럼 Vite이 만들어 준 "},{type:b,tag:f,props:{},children:[{type:a,value:x}]},{type:a,value:" 파일을 살펴보죠."}]},{type:a,value:e},{type:b,tag:t,props:{className:[u]},children:[{type:b,tag:c,props:{className:[V]},children:[{type:a,value:x}]},{type:b,tag:v,props:{className:[w,W]},children:[{type:b,tag:f,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:q}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\"name\""}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:l}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"\"vue-extension\""}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:r}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\"version\""}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:l}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"\"0.0.0\""}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:r}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:l}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:q}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:aB}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:l}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:aC}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:r}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:l}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"\"vite build\""}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:r}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\"serve\""}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:l}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"\"vite preview\""}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:r}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\"dependencies\""}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:l}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:q}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\"vue\""}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:l}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:aD}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:r}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\"devDependencies\""}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:l}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:q}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\"@vitejs\u002Fplugin-vue\""}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:l}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"\"^1.2.2\""}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:r}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\"@vue\u002Fcompiler-sfc\""}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:l}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:aD}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:r}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:aC}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:l}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"\"^2.3.0\""}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:s}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:s}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"이 "},{type:b,tag:f,props:{},children:[{type:a,value:x}]},{type:a,value:" 파일을 제대로 설명하기 위해 또 다른 포스팅이 필요할 정도로 알아야 할 내용이 굉장히 많습니다만, 일단은 이 프로젝트를 진행하기 위해 알아야할 부분만 간단하게 설명하겠습니다."}]},{type:a,value:e},{type:b,tag:aE,props:{},children:[{type:a,value:e},{type:b,tag:y,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"name"}]},{type:a,value:": 프로젝트 이름입니다. 외부로 배포하지 않는다면 무시해도 됩니다."}]},{type:a,value:e},{type:b,tag:y,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"version"}]},{type:a,value:": 프로젝트 버전입니다. 외부로 배포하지 않는다면 무시해도 됩니다."}]},{type:a,value:e},{type:b,tag:y,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:Z}]},{type:a,value:": 커맨드라인 명령어를 정의할 수 있습니다. 예를 들어 "},{type:b,tag:f,props:{},children:[{type:a,value:"dev"}]},{type:a,value:"의 경우 "},{type:b,tag:f,props:{},children:[{type:a,value:_}]},{type:a,value:"라는 값이 정의되어있는데, 터미널에 "},{type:b,tag:f,props:{},children:[{type:a,value:H}]},{type:a,value:" 이라는 명령어를 입력하면 대신 "},{type:b,tag:f,props:{},children:[{type:a,value:_}]},{type:a,value:"를 실행하게 됩니다."}]},{type:a,value:e},{type:b,tag:y,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:aF}]},{type:a,value:": 외부 패키지들을 목록입니다. 여기에 패키지들을 적고 "},{type:b,tag:f,props:{},children:[{type:a,value:"npm install"}]},{type:a,value:" 명령어를 입력하면 프로젝트 루트 디렉토리에 "},{type:b,tag:f,props:{},children:[{type:a,value:"node_modules"}]},{type:a,value:" 폴더가 생기고, 이 밑에 적어둔 모든 패키지가 설치됩니다. "},{type:b,tag:f,props:{},children:[{type:a,value:aF}]},{type:a,value:aw},{type:b,tag:f,props:{},children:[{type:a,value:"devDependencies"}]},{type:a,value:" 와의 차이는 일단 무시하세요."}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"우리가 좀 더 알아야 할 부분은 "},{type:b,tag:f,props:{},children:[{type:a,value:Z}]},{type:a,value:" 부분입니다. 아래 내용은 "},{type:b,tag:f,props:{},children:[{type:a,value:_}]},{type:a,value:" 프로젝트에 대해서만 유효합니다."}]},{type:a,value:e},{type:b,tag:aE,props:{},children:[{type:a,value:e},{type:b,tag:y,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:H}]},{type:a,value:": 개발 서버를 열어줍니다. 기본값은 "},{type:b,tag:f,props:{},children:[{type:a,value:ay}]},{type:a,value:R}]},{type:a,value:e},{type:b,tag:y,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:L}]},{type:a,value:": 프로덕션 (배포)용 프로젝트를 위해 코드를 정제합니다. 그리고 그 결과물을 "},{type:b,tag:f,props:{},children:[{type:a,value:I}]},{type:a,value:" 폴더로 내보냅니다. 보통 이 작업을 "},{type:b,tag:S,props:{},children:[{type:a,value:"build"}]},{type:a,value:" 라고 합니다."}]},{type:a,value:e},{type:b,tag:y,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"npm run serve"}]},{type:a,value:": 빌드된 프로젝트를 실행시킵니다. 역시 서버가 열립니다. 기본값은 "},{type:b,tag:f,props:{},children:[{type:a,value:"http:\u002F\u002Flocalhost:5000"}]},{type:a,value:R}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"패키지 목록을 보니, 현재 Vue 최신 버전인 "},{type:b,tag:f,props:{},children:[{type:a,value:"Vue 3"}]},{type:a,value:"가 설치되어있습니다. 2버전과 3버전은 차이가 꽤 크고, 3 버전에서 정말 많은 개선이 이루어졌으니 혹시라도 "},{type:b,tag:f,props:{},children:[{type:a,value:"2.x"}]},{type:a,value:" 이하의 버전을 사용하고 계셨던 분들이라면, 이번 기회에 "},{type:b,tag:f,props:{},children:[{type:a,value:"3.x"}]},{type:a,value:" 버전을 사용해보세요."}]},{type:a,value:e},{type:b,tag:z,props:{id:af},children:[{type:b,tag:p,props:{href:"#vite%EC%9D%84-%ED%99%95%EC%9E%A5-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%A8%EC%9C%BC%EB%A1%9C-%EB%A7%8C%EB%93%A4%EA%B8%B0",ariaHidden:A,tabIndex:B},children:[{type:b,tag:c,props:{className:[C,D]},children:[]}]},{type:a,value:ag}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"간단합니다. 이전에 만들어두었던 "},{type:b,tag:f,props:{},children:[{type:a,value:J}]},{type:a,value:" 파일을 "},{type:b,tag:f,props:{},children:[{type:a,value:$}]},{type:a,value:" 폴더에 넣어주고 빌드하면 됩니다."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:$}]},{type:a,value:" 폴더에 넣는 이유는 vite가 프로젝트를 빌드할 때 "},{type:b,tag:f,props:{},children:[{type:a,value:$}]},{type:a,value:" 폴더에 있는 파일들의 코드는 건들지 않고 바로 "},{type:b,tag:f,props:{},children:[{type:a,value:I}]},{type:a,value:" 폴더로 옮겨주기 때문입니다."}]},{type:a,value:e},{type:b,tag:t,props:{className:[u]},children:[{type:b,tag:v,props:{className:[w,"language-text"]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"$ touch public\u002Fmanifest.json\n$ npm run build\n"}]}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"이렇게하면 "},{type:b,tag:f,props:{},children:[{type:a,value:J}]},{type:a,value:" 파일이 포함된 결과물이 "},{type:b,tag:f,props:{},children:[{type:a,value:I}]},{type:a,value:" 폴더로 내보내집니다. 크롬 확장 프로그램 관리자 페이지에서 이 "},{type:b,tag:f,props:{},children:[{type:a,value:I}]},{type:a,value:"를 로드하면 정상적으로 확장 프로그램으로 작동하는 걸 확인할 수 있습니다."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:b,tag:az,props:{alt:aA,src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F20244536\u002F118083782-7faa5f80-b3fa-11eb-944f-8c782d05a59f.png"},children:[]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"하지만 여기서 큰 문제가 하나 있습니다."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"우리가 크롬 확장 프로그램을 개발할 때 계속해서 앱 화면을 확인해야하는데, 매번 "},{type:b,tag:f,props:{},children:[{type:a,value:L}]},{type:a,value:" 를 입력하면서 개발을 할 순 없겠죠. 엄청난 시간 낭비일겁니다."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"해결 방법은 간단합니다. "},{type:b,tag:f,props:{},children:[{type:a,value:x}]},{type:a,value:"의 "},{type:b,tag:f,props:{},children:[{type:a,value:"script.build"}]},{type:a,value:" 부분을 다음과 같이 수정해주세요."}]},{type:a,value:e},{type:b,tag:t,props:{className:[u]},children:[{type:b,tag:c,props:{className:[V]},children:[{type:a,value:x}]},{type:b,tag:v,props:{className:[w,W]},children:[{type:b,tag:f,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:q}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:l}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:q}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:l}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:aG}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:s}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:s}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"이제 개발할 때 "},{type:b,tag:f,props:{},children:[{type:a,value:H}]},{type:a,value:" 대신에 "},{type:b,tag:f,props:{},children:[{type:a,value:L}]},{type:a,value:" 를 실행하면, 개발 서버처럼 동작하되 코드를 수정할 때 마다 계속해서 빌드를 하게됩니다. 이렇게 하면 계속해서 build 명령어를 입력하지 않아도 되겠죠."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"근데 여기서 또 다른 문제가 하나 있다면, 일반 웹사이트 개발과는 다르게 크롬 확장 프로그램은 앱 특성상 코드 변경 후 화면을 확인 할 때 창을 껐다 켜야 변경사항을 확인할 수 있습니다."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"저는 그냥 껐다 켰다 하면서 개발하고 있지만, 이게 번거로우시다면 "},{type:b,tag:f,props:{},children:[{type:a,value:H}]},{type:a,value:"를 이용해 "},{type:b,tag:f,props:{},children:[{type:a,value:"localhost"}]},{type:a,value:"에서 개발하고 배포 전 테스트 할 때만 창으로 확인해도 상관없습니다. 편한 방법으로 개발하시면 되겠습니다."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"저는 브라우저에서 테스트하고 싶진 않으니 "},{type:b,tag:f,props:{},children:[{type:a,value:Z}]},{type:a,value:" 명령어를 크롬 확장 프로그램에 좀 더 맞게끔 수정하고, 결과물을 압축해주는 기능까지 추가해보록 하겠습니다."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"압축을 하기 위해서는 패키지를 하나 설치해야합니다. 설치 후 코드를 변경해주세요."}]},{type:a,value:e},{type:b,tag:t,props:{className:[u]},children:[{type:b,tag:v,props:{className:[w,T]},children:[{type:b,tag:f,props:{},children:[{type:a,value:U},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:K}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:ax}]},{type:a,value:" -D bestzip\n"}]}]}]},{type:a,value:e},{type:b,tag:t,props:{className:[u]},children:[{type:b,tag:c,props:{className:[V]},children:[{type:a,value:x}]},{type:b,tag:v,props:{className:[w,W]},children:[{type:b,tag:f,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:q}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:l}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:q}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:aB}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:l}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:aG}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:l}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"\"bestzip dist.zip dist\u002F\""}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:s}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:s}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"이제 평소 개발을 할 때는 "},{type:b,tag:f,props:{},children:[{type:a,value:H}]},{type:a,value:"을 이용해 감시 모드로 빌드를 하고, 앱을 배포할 시기가 오면 "},{type:b,tag:f,props:{},children:[{type:a,value:L}]},{type:a,value:" 명령어를 이용해 "},{type:b,tag:f,props:{},children:[{type:a,value:I}]},{type:a,value:" 폴더를 "},{type:b,tag:f,props:{},children:[{type:a,value:"dist.zip"}]},{type:a,value:" 파일로 만들어주면 됩니다."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"결과물을 압축하는 이유는, 이후 확장 프로그램을 스토어에 배포할 때 "},{type:b,tag:f,props:{},children:[{type:a,value:".zip"}]},{type:a,value:" 파일로 제출해야하기 때문입니다."}]},{type:a,value:e},{type:b,tag:z,props:{id:ah},children:[{type:b,tag:p,props:{href:"#2%EB%B6%80-%EB%A7%88%EB%AC%B4%EB%A6%AC",ariaHidden:A,tabIndex:B},children:[{type:b,tag:c,props:{className:[C,D]},children:[]}]},{type:a,value:ai}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"2부 강의에서 "},{type:b,tag:f,props:{},children:[{type:a,value:"Vue"}]},{type:a,value:"를 설치하긴 했지만, 막상 뷰 코드를 열어보지도 못했네요. 하지만 프로젝트 구조를 잘 잡아두었으니 이제 다음 강의에서는 코드 작성에 좀 더 치중해보도록 하겠습니다."}]}]},excerpt:{type:aj,children:[{type:b,tag:g,props:{},children:[{type:b,tag:ak,props:{to:al},children:[{type:a,value:am}]},{type:a,value:an},{type:b,tag:f,props:{},children:[{type:a,value:ao}]},{type:a,value:ap},{type:b,tag:f,props:{},children:[{type:a,value:J}]},{type:a,value:aq}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:ar}]},{type:a,value:e},{type:b,tag:z,props:{id:M},children:[{type:b,tag:p,props:{href:as,ariaHidden:A,tabIndex:B},children:[{type:b,tag:c,props:{className:[C,D]},children:[]}]},{type:a,value:G}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:b,tag:p,props:{href:at,rel:[N,O,P],target:Q},children:[{type:a,value:G}]},{type:a,value:au}]}]},dir:"\u002Farticles",path:"\u002Farticles\u002Fvuejs로-크롬-확장-프로그램-만들기-강의-2부",extension:".md",createdAt:aH,updatedAt:aH}}],fetch:{},mutations:void 0}}("text","element","span","token","\n","code","p","punctuation"," ","property","operator",":","\n  ","string","\n    ","a","{",",","}","div","nuxt-content-highlight","pre","line-numbers","package.json","li","h2","true",-1,"icon","icon-link","function",2,"Vue.js","npm run dev","dist","manifest.json","npm","npm run build","vuejs","nofollow","noopener","noreferrer","_blank"," 입니다.","strong","language-bash","$ ","filename","language-json","\"scripts\"","\"build\"","scripts","vite","public","2021-05-13T00:00:00.000Z","프로젝트-새로-구성하기","프로젝트 새로 구성하기","프로젝트-구조","프로젝트 구조","vite을-확장-프로그램으로-만들기","Vite을 확장 프로그램으로 만들기","2부-마무리","2부 마무리","root","nuxt-link","\u002Fvuejs%EB%A1%9C-%ED%81%AC%EB%A1%AC-%ED%99%95%EC%9E%A5-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%A8-%EB%A7%8C%EB%93%A4%EA%B8%B0-%EA%B0%95%EC%9D%98-1%EB%B6%80","이전 포스팅","에서 ","index.html","과 "," 파일을 이용해서 확장 프로그램을 개발자 모드로 실행시키는 것 까지 진행했습니다.","이번 포스팅에서는 Vue.js와 Vite을 사용해서 프로젝트를 재설계해보도록 하겠습니다.","#vuejs","https:\u002F\u002Fv3.vuejs.org\u002F","는 웹사이트를 만들기 위해 고안된 프레임워크입니다. 그냥 순수 HTML을 작성하는 것 보다 개발자에게 훨씬 더 많은 이점을 가져다주기 때문에 사용합니다.","blockquote","와 ","install","http:\u002F\u002Flocalhost:3000","img","","\"dev\"","\"vite\"","\"^3.0.5\"","ol","dependencies","\"vite build --watch\"","2021-05-14T02:31:04.633Z")));