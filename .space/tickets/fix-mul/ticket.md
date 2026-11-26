---
id: fix-mul
title: mulが1多い値を返す不具合を直す
status: running
parent:
depends_on: []
created: 2026-11-26T03:51:36Z
updated: 2026-11-26T03:51:42Z
---

# mulが1多い値を返す不具合を直す

## 目的
mul(2, 3) が 7 を返す。利用者が受け取る掛け算の結果が常に1多い。

## 終了条件
- 既存の mul のテスト（mul(2, 3) が 6）が、修正前に失敗し、修正後に通る。
- 修正のPRがある。

## 成果物

## checkpoint

## 結果
