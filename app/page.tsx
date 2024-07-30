

"use client";
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { Controlled as CodeMirror} from 'react-codemirror2'

if (typeof navigator !== 'undefined') {

// @ts-ignore
  dynamic(() => import('codemirror/mode/javascript/javascript'), { ssr: false })
}
export default function Home() {
  const [codeString, setCodeString] = useState('const add = (a, b) => a+b;')
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if(typeof navigator != 'undefined'){
      setReady(true)
    }
  }, [])
  return (
    <>
   {ready && <CodeMirror
    value={codeString}
    options={{
      mode: 'javascript',
      theme: 'material',
      lineNumbers: true,
    }}
    onBeforeChange={(editor: any, data: any, value: string) => {
      setCodeString(value)
    }}
    onChange={(editor: any, data: any, value: string) => {
// setCodeString(value)
    }}
    />}
    </>
    
  );
}
