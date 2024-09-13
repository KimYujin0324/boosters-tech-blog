---
layout: post # 고정으로 넣어주세요.
title:  "오래되어 삐걱거리는 Legacy 시스템 업그레이드 과정" # 제목
subtitle: "오래된 레거시 코드를 수정하는 것은 어렵습니다. 오래된 레거시 시스템을 바꾸는 것은 더 어렵습니다. 사용하고 있는 오래된 시스템을 더 오래되고 고장나기 전에 최신의 시스템으로 업그레이드 한 경험을 기술하였습니다." # 소제목으로 글 목록에서 타이틀 아래에 표기됩니다.
author: dilee # 작성자 이름
category: tech # tech, culture 중 택 1
tags: [ ubuntu, Centos, VersionUp, Regacy, Refactoring ] # 원하시는 태그들을 2~6개 넣어주세요. (띄어쓰기 X)
image: assets/images/1.jpg # 고정으로 넣어주세요.
image_count: 5 # 글 예상 소요시간 계산을 위해 해당 포스트에 사용된 사진의 개수를 적어주세요.
---

<!--
개요와 중제목 사이에는 한줄 띄워주시고, 중제목과 중제목 사이에는 두줄 띄워주세요.
문단을 나눌때는 한줄 띄워주세요.
-->

## 해당 포스트는..
> 오랫동안 사용했던 Laravel, php, vue.js, node.js, centos7, Apache, Mysql 등의 기술들을 최신의 버전으로 업그레이드 하는 과정을 담았습니다. 다양한 시행착오 끝에 마무리된 레거시 시스템 업그레이드 프로젝트를 기록합니다.

## 버전업의 필요성을 느끼다.
운영 시스템의 복잡성이 증가함에 따라 사용하고자 하는 기술의 폭이 넓어지고 관련 라이브러리들을 설치할 일들이 종종 생기곤 합니다. 그러나 오래된 시스템과 프레임워크의 버전에 따라 호환되지 않는 라이브러리들이 생기기 시작하고 기술의 한계에 부딪히기 시작했습니다.

먼저 사용중인 웹프레임워크인 Laravel의 버전이 낮음에 따라 Composer로 설치할 수 있는 패키지의 선택의 폭이 좁았습니다. 가장 최근의 Laravel의 버전은 11.x 버전인 데 비해 사용하고 있는 버전은 너무 낮은 버전이었습니다. 부끄럽게도 기존 사용하는 버전은 2019년 8월에 종료된 5.6 버전이었습니다. 가장 먼저 시도한 것이 Laravel8 버전으로 높여보자 였습니다. 5.6에서 6버전까지 올리는데는
composer.json에 버전 명시만 잘해주니 문제없이 진행되었습니다. 그러나 6버전에서 7버전으로 올릴때는 PHP 버전을 높여야하는 이슈가 생겼습니다.

사용중인 PHP 버전은 7.2 버전이었습니다. 7.2버전을 설치할 때는 소스컴파일로 설치를 하였기때문에 7.4버전도 경험에 의한 방법으로 소스컴파일 설치를 진행하였습니다.
```
error 1. configure: error: Package requirements (gdlib >= 2.1.0) were not met:
error 2. configure: error: Package requirements (sqlite3 > 3.7.4) were not met:
error 3. configure: error: Package requirements (icu-uc >= 50.1 icu-io icu-i18n) were not met:
error 4. configure: error: Package requirements (oniguruma) were not met:
error 5. configure: error: GD build test failed. Please check the config.log for details.
```
configure 과정에서 다양한 에러를 만났지만 하나하나 의존성 패키지를 업그레이드 해가며 설치진행하였습니다. 다행이 의존성 문제를 해결하니 7.4버전이 정상 설치되었습니다. PHP 하나 업그레이드 하는데 2~3일 걸리다보니 벌써 마음이 지치긴했지만 성공했다는 기쁨에 팀원들에게 같이 설치과정을 다시 해보자며 회의실에서 이러쿵 저러쿵 무용담을 늘어뜨리기도 했습니다. openssl 이 업그레이드 되어있는 특정 서버에서는 configure 에러가 또 다시 등장하여 애먹긴 하였지만 모든 사용 서버에 PHP7.4 버전업을 성공시켰습니다.

다음은 다시 Laravel을 6버전에서 8버전으로 업그레이드를 시도하였습니다. 다행이 PHP 버전에 따라 Laravel도 8 버전으로 문제없이 업그레이드 되었습니다. 물론 PHP 문법 변경에 따른 소스 수정은 진행하여야 했지만 무사히 프레임워크의 업그레이드를 성공하였습니다. 노션에 주요 변경사항을 기록하여 팀원들과 공유하였습니다.

<p style="text-align: center;">
  <img src="/boosters-tech-blog/assets/images/2024-09/post8-change-regacy-refactoring(1).png" alt="Laravel Version UP 노션 (1)">
</p>
<p style="text-align: center;">
  <img src="/boosters-tech-blog/assets/images/2024-09/post8-change-regacy-refactoring(2).png" alt="Laravel Version UP 노션 (2)">
</p>


## Vue3를 사용하고 싶어요.

Laravel과 PHP 버전업의 성공으로 레거시 시스템 업그레이드 프로젝트에 자신감이 생겼습니다. 자신감이 생기고 자아도취를 하며 오래전부터 Vue3를 사용하고 싶어하는 유진님께 "Vue3도 업그레이드 해드릴게요~" 라고 선전포고를 하였습니다. 이참에 Vue3로 업그레이드 해서 Vue3와 호환되는 다양한 라이브러리들을 사용해보면 더 좋겠다는 생각도 예전부터 하고 있엇던 터라 Vue.js 업그레이드를 시작하였습니다.

자신감이 문제였을까요. 계속 알수 없는 에러를 내뿜으며 Vue2는 그리 쉽게 Vue3로 업그레이드 되지 않았습니다. 원인을 찾는데만 며칠 걸렸던 것 같습니다. 이유는 node.js 버전때문이었습니다. node.js 도 16버전을 사용하고 있었는데 vue3를 정상 설치하려면 18버전 이상의 버전이 필요했습니다. node.js는 nvm(node version management)으로 버전관리를 하고 있었기에 쉽게 버전업이 될거라고 생각했습니다. 그러나 Centos7는 뭔가 업그레이드 하면 곤란해보이는 에러를 내뿜었습니다.

<p style="text-align: center;">
  <img src="/boosters-tech-blog/assets/images/2024-09/post8-change-regacy-refactoring(3).png" alt="Node Version up GLIBC Error">
</p>

내용은 Node가 지원할 수 있는 것보다 낮은 버전의 GLIBC가 있는 운영 체제에 설치되어 있다는 것이었습니다. 여기서 이것을 업그레이드 할 것이냐, OS를 바꿔야 할것이냐에 큰 기로에 섰습니다. "Vue3를 사용하려고 OS를 바꿔야해?" 라는 약한 생각도 들었지만 앞으로 이런상황을 계속 회피할 순 없다는 생각에 OS를 바꿔보는 걸로 결정하였습니다.

## Centos7가 "지원종료" 되다.
OS 를 변경하기 전에 기존에 사용하는 Centos7에 대해 조금 더 조사하던 중 놀라운 사실을 알게되었습니다. 바로 Centos7이 서비스 종료가 되었다는 것입니다. 불과 이 프로젝트를 시작한 1달 전에 종료되었습니다. 운명인것 같다는 생각도 들면서 더더욱 CentOS7 를 Ubuntu로 바꿔야겠다는 생각에 확신이 들었습니다.

<p style="text-align: center;">
  <img src="/assets/images/2024-09/post8-change-regacy-refactoring(4).png" alt="centos7 지원종료">
</p>

Ubuntu로 변경하고 PHP도 8이상 버전으로 업그레이드 하고 다른 Regacy 기술들도 모두 버전업하여 당분간 몇년간은 기술 스택에 대해 문제없게끔 해야겠다는 생각도 하였습니다. Ubuntu 버전은 지원종료일이 최대한 멀리있는 22.04 또는 24.04 버전으로 결정하였습니다. 다시 Ubuntu 서버에 Apache / Mysql / PHP / Node.js / Python 등을 완벽 설치하는 것을 목표가 되었습니다.

<p style="text-align: center;">
  <img src="/assets/images/2024-09/post8-change-regacy-refactoring(5).png" alt="Ubuntu 버전정보">
</p>


## Ubuntu 서버 개설
지난 과정으로 설치과정에 나오는 무수한 에러에 대한 내성도 생겼고 설치에 대한 자신감도 생겼으니 Ubuntu 서버는 레퍼런스도 많고 아무런 문제 없이 잘 될 것이라 생각하고 호기롭게 Ubuntu 이미지를 Ec2로 올렸습니다. 먼저 문제가 되었던 node.js 18 이상 버전이 잘 설치되는지를 테스트하였습니다.

nvm 을 설치하고 nvm install --lts 하니 기존 서버와는 다르게 속시원하게 아무런 에러를 내지 않고 무려 v20 버전이 설치되었습니다. "역시 ubuntu는 문제없네"라고 생각하며 APM을 설치해보기 시작했습니다. 
