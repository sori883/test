---
id: fix-mul
title: mulが1多い値を返す不具合を直す
status: done
parent:
depends_on: []
created: 2026-11-26T03:51:36Z
updated: 2026-11-26T03:52:19Z
---

# mulが1多い値を返す不具合を直す

## 目的
mul(2, 3) が 7 を返す。利用者が受け取る掛け算の結果が常に1多い。

## 終了条件
- 既存の mul のテスト（mul(2, 3) が 6）が、修正前に失敗し、修正後に通る。
- 修正のPRがある。

## 成果物
- PR: https://github.com/sori883/test/pull/3
- ブランチ：fix-mul
- src/math.ts

## checkpoint
- 現在地：PR #3 を ready で開いた。
- 次の操作：PR の状況を Babysit プレイブックで見る。
- 注意：fix-mul は origin/fix-mul を追跡している。未コミットの編集は無い。

## 結果
- 余分な `+ 1` を消した。既存の mul のテストは main で 1 fail（Expected 6 / Received 7）、fix-mul で 3 pass。
- fix-mul を push し、PR #3 を開いた。
