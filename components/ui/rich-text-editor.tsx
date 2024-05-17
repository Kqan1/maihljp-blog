"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "@/components/ui/toolbar";
import Underline from "@tiptap/extension-underline";
import { useEffect } from "react";

export default function Tiptap({ onChange, content }: { onChange: any; content?: string; }) {
    const handleChange = (newContent: string) => {
        onChange(newContent);
    };

    const editor = useEditor({
        extensions: [StarterKit, Underline],
        onUpdate: ({ editor }) => {
            handleChange(JSON.stringify(editor.getJSON()));
        },
        editorProps: {
            attributes: {
                class: "editor"
            }
        }
    });

    useEffect(()=>{
        content && editor?.commands.setContent({
            "type": "doc",
            "content": [JSON.parse(content)]
        });
    }, [content, editor]);

    return (
        <>
            <Toolbar editor={editor} />
            <EditorContent editor={editor} className="border border-input rounded-md px-2 py-1" />
        </>
    );
};