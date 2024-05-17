"use client";
import { useEffect, useState } from "react";

import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";

interface AlertModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    loading: boolean;
    title?: string;
    description?: string;
}

export const AlertModal: React.FC<AlertModalProps> = ({ isOpen, onClose, onConfirm, loading, title, description }) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <Modal
            title={title ?? "Emin misin?"}
            description={description ?? "Bu işlem geri alınamaz"}
            isOpen={isOpen}
            onClose={onClose}
        >
            <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                <Button disabled={loading} variant="outline" onClick={onClose}>
                    İptal
                </Button>
                <Button
                    disabled={loading}
                    variant="destructive"
                    onClick={onConfirm}
                >
                    Devam Et
                </Button>
            </div>
        </Modal>
    );
};