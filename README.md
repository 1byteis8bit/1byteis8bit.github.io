# marryjane.github.io

Markdown으로 관리하는 Jekyll 기반 보안 연구 아카이브입니다. GitHub Pages가 자동으로 빌드하므로 로컬 빌드 도구 없이도 글을 발행할 수 있습니다.

## 새 글 추가

1. `templates/`에서 원하는 양식을 복사합니다.
2. 종류에 맞는 폴더에 `.md` 파일로 저장합니다.

```text
_labs/my-analysis.md
_writing/my-note.md
_projects/my-project.md
```

3. 파일 위쪽 `---` 사이의 메타데이터를 수정합니다.
4. 아래쪽 본문을 Markdown으로 작성합니다.
5. 커밋하고 GitHub에 푸시합니다.

파일명은 주소가 됩니다. 예를 들어 `_labs/password-checker.md`는 `/labs/password-checker/`로 발행됩니다.

`artifact_id`에는 사이트에서 사용할 고유 번호를 입력합니다.

```yaml
artifact_id: MJ-REV-001
```

## 홈에 글 노출

글의 메타데이터에서 다음 값을 설정합니다.

```yaml
featured: true
```

최신 Featured 글 세 개가 홈에 자동 표시됩니다.

## 상태와 태그

```yaml
status: Complete
tags:
  - reversing
  - gdb
  - x86-64
```

상태는 `Complete`, `In Progress`, `Archived`, `Revisiting`, `Draft` 등을 자유롭게 사용할 수 있습니다.

## 사이트 문구 수정

- 홈: `index.md`
- 소개: `about.md`
- 사이트 이름과 주소: `_config.yml`
- 공통 헤더와 푸터: `_includes/`
- 디자인: `assets/style.css`

## 로컬 미리보기

Ruby와 Bundler가 설치된 환경에서:

```bash
bundle install
bundle exec jekyll serve
```

그 후 `http://localhost:4000`을 엽니다.
