"use client";

import { Separator } from "@/components/ui/seperator";
import { Toggle } from "@/components/ui/toggle";
import { type Editor } from "@tiptap/react";
import { BoldIcon, ItalicIcon, ListIcon, ListOrderedIcon, StrikethroughIcon } from "lucide-react";

export default function RichTextEditorToolbar({ editor }: { editor: Editor | null }) {
    if (!editor) return null;
    
    return (
        <div className="flex items-center fixed rounded-md border border-input bg-white/60 p-1 gap-1 bottom-16 left-1/2 -translate-x-1/2">
            <Toggle
                size="sm"
                pressed={editor.isActive("bold")}
                onPressedChange={() =>
                    editor.chain().focus().toggleBold().run()
                }
            >
                <BoldIcon className="h-4 w-4" />
            </Toggle>
            <Toggle
                size="sm"
                pressed={editor.isActive("italic")}
                onPressedChange={() =>
                    editor.chain().focus().toggleItalic().run()
                }
            >
                <ItalicIcon className="h-4 w-4" />
            </Toggle>
            <Toggle
                size="sm"
                pressed={editor.isActive("strike")}
                onPressedChange={() =>
                    editor.chain().focus().toggleStrike().run()
                }
            >
                <StrikethroughIcon className="h-4 w-4" />
            </Toggle>
            <Separator orientation="vertical" className="w-[1px] h-8" />
            <Toggle
                size="sm"
                pressed={editor.isActive("bulletList")}
                onPressedChange={() =>
                    editor.chain().focus().toggleBulletList().run()
                }
            >
                <ListIcon className="h-4 w-4" />
            </Toggle>
            <Toggle
                size="sm"
                pressed={editor.isActive("orderedList")}
                onPressedChange={() =>
                    editor.chain().focus().toggleOrderedList().run()
                }
            >
                <ListOrderedIcon className="h-4 w-4" />
            </Toggle>
        </div>
    );
};