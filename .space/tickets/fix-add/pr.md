fix(add): 和に足していた余分な 1 を消す

## 目的
`add` が常に引数の和より1多い値を返していた。`add(2, 3)` は 6 を返す。

## 変更内容
- `src/math.test.ts`：`add(2, 3)` が 5 を返すテストを足す。修正前のコミットで失敗する。
- `src/math.ts`：`return a + b + 1;` を `return a + b;` にする。

## 範囲
`add` だけを変える。`mul` は変えない。

## 検証
`bun test` を各コミットで実行した。

- テストのコミット：1 pass、1 fail（Expected 5 / Received 6）。
- 修正のコミット：2 pass、0 fail。

🤖 Generated with [Claude Code](https://claude.com/claude-code)
