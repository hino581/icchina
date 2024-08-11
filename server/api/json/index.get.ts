import { readFileSync } from 'fs';
import { resolve } from 'path';
import { defineEventHandler, getQuery } from 'h3';

export default defineEventHandler((event) => {
  // クエリパラメータからファイル名を取得
  const query = getQuery(event);
  const fileName = query.file as string;

  if (!fileName) {
    return { error: 'File name is required' };
  }

  try {
    // ファイルパスを解決
    const filePath = resolve(`public/${fileName}.json`);
    
    // ファイルを読み込み
    const data = readFileSync(filePath, 'utf-8');
    
    // JSONとしてパースして返す
    return JSON.parse(data);
  } catch (error) {
    // エラーハンドリング
    return { error: `File not found: ${fileName}.json` };
  }
});
