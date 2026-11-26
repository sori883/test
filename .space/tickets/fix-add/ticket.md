---
id: fix-add
title: addが1多い値を返す不具合を直す
status: paused
parent:
depends_on: []
created: 2026-11-26T02:14:29Z
updated: 2026-11-26T02:16:37Z
---

# addが1多い値を返す不具合を直す

## 目的
add(2, 3) が 6 を返す。利用者が受け取る足し算の結果が常に1多い。

## 終了条件
- add(2, 3) が 5 を返すことを、失敗するテストを先に置いて確かめる。
- 修正のPRがある。

## 成果物
- ブランチ：fix-add
- PR の文面：.space/tickets/fix-add/pr.md（1行目がタイトル）
- src/math.test.ts、src/math.ts

## checkpoint
- 現在地：修正まで済んだ。fix-add は「失敗するテスト」「修正」「チケット更新」の3コミット。`bun test` はテストのコミットで 1 fail（Expected 5 / Received 6）、修正のコミットで 2 pass。PR は未作成。リモートが無いため作れない。
- 次の操作：リモートを足して fix-add を push し、pr.md の文面で PR を開く（`gh pr create --title "$(head -1 pr.md)" --body "$(tail -n +3 pr.md)"`）。PR の URL を成果物に書く。
- 注意：未コミットの編集は無い。main は未変更。再開の条件はリモートができること。

## 結果
