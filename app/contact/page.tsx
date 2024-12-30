"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FaCheck, FaCopy } from "react-icons/fa";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("yangskinny_info@ve.jvcmusic.co.jp");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="container mx-auto max-w-2xl px-4">
        <h1 className="mb-12 text-center font-light text-4xl tracking-wider">
          CONTACT
        </h1>

        <div className="space-y-8">
          {/* Email Contact Section */}
          <Card className="p-6">
            <h2 className="mb-4 font-medium text-lg">▼お問い合わせ先</h2>
            <div className="flex items-center justify-between rounded-lg border bg-gray-50 p-3">
              <span className="font-mono">shinnosuke@boss.co.jp</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={copyEmail}
                className="ml-2"
              >
                {copied ? (
                  <FaCheck className="h-4 w-4 text-green-500" />
                ) : (
                  <FaCopy className="h-4 w-4" />
                )}
              </Button>
            </div>
          </Card>

          {/* Fan Letter Address Section */}
          <Card className="p-6">
            <h2 className="mb-4 font-medium text-lg">
              ▼ファンレター等の送り先
            </h2>
            <div className="space-y-2 text-gray-700">
              <p>〒810-0011</p>
              <p>福岡県福岡市中央区</p>
              <p> Boss babyー宛</p>
              <p className="mt-4 text-gray-500 text-sm">
                (メンバー宛の場合は 例：「Bossbaby しんのすけ宛」)
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
