---
id: fix-add
title: addが1多い値を返す不具合を直す
status: done
parent:
depends_on: []
created: 2026-11-26T02:14:29Z
updated: 2026-11-26T02:51:07Z
---

# addが1多い値を返す不具合を直す

## 目的
add(2, 3) が 6 を返す。利用者が受け取る足し算の結果が常に1多い。

## 終了条件
- add(2, 3) が 5 を返すことを、失敗するテストを先に置いて確かめる。
- 修正のPRがある。

## 成果物
- PR: https://github.com/sori883/test/pull/2
- ブランチ：fix-add
- PR の文面：.space/tickets/fix-add/pr.md（1行目がタイトル）
- src/math.test.ts、src/math.ts

## checkpoint
- 現在地：PR #2 を ready で開いた。レビューと CI を待っている。
- 次の操作：PR の状況を Babysit プレイブックで見る。レビューの指摘があれば fix-add に積む。
- 注意：fix-add は origin/fix-add を追跡している。未コミットの編集は無い。

## 結果
- 失敗するテストを先に置き、余分な `+ 1` を消した。再開時に実物で確かめた。テストのコミット f4ee3a6 で `bun test` は 1 fail（Expected 5 / Received 6）、fix-add の先端で 2 pass。
- fix-add を origin に push し、pr.md の文面で PR #2 を開いた。
