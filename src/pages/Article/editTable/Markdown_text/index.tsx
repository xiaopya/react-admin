import './style.less';
import React, { useState } from 'react';
import Editor from 'md-editor-rt';
import sanitizeHtml from 'sanitize-html';
import 'md-editor-rt/lib/style.css';

interface IAppProps {}

const Markdown_text: React.FunctionComponent<IAppProps> = (props) => {
  const [text, setText] = useState<any>('欢迎使用!!!');
  const [toolbars] = useState<string[]>([
    'bold',
    'underline',
    'italic',
    '-',
    'strikeThrough',
    'sub',
    'sup',
    'quote',
    'unorderedList',
    'orderedList',
    '-',
    'codeRow',
    'code',
    'link',
    'image',
    'table',
    'mermaid',
    '-',
    'revoke',
    'next',
    'save',
    '=',
    'pageFullscreen',
    'fullscreen',
    'preview',
    'htmlPreview',
    'catalog',
  ]);
  const onUploadImg = async (
    files: FileList,
    callback: (urls: string[]) => void,
  ) => {
    const res = await Promise.all(
      Array.from(files).map((file) => {
        return new Promise((rev, rej) => {
          const form = new FormData();
          form.append('file', file);
          console.log(file, 'files...');
          // axios
          // .post('/api/img/upload', form, {
          //   headers: {
          //     'Content-Type': 'multipart/form-data'
          //   }
          // })
          // .then((res) => rev(res))
          // .catch((error) => rej(error));
        });
      }),
    );
    callback(res.map((item: any) => item.data.url));
  };

  return (
    <Editor
      toolbars={toolbars}
      modelValue={text}
      onChange={setText}
      sanitize={(html: any) => sanitizeHtml(html)}
      onUploadImg={onUploadImg}
    />
  );
};

export default Markdown_text;
