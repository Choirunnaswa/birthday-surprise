'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Props = {
  onFlowComplete: () => void;
};

export default function InteractionFlow({ onFlowComplete }: Props) {
  const [step, setStep] = useState(1);
  const [pin, setPin] = useState('');
  const [pinError, setPinError] = useState(false);

  const correctPin = '30091997';

  const checkPin = () => {
    if (pin === correctPin) {
      setPinError(false);
      setStep(3);
    } else {
      setPinError(true);
    }
  };

  const next = () => {
    setStep((current) => current + 1);
  };

  return (
    <main className="fixed inset-0 z-50 bg-[#0b0b0b] text-white overflow-y-auto">
      <div className="min-h-screen w-full flex items-center justify-center px-6 py-12">

        <AnimatePresence mode="wait">

          {/* 01 — OPENING */}
          {step === 1 && (
            <motion.section
              key="opening"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7 }}
              className="w-full max-w-sm text-center"
            >
              <p className="text-sm tracking-[0.25em] uppercase text-white/40 mb-8">
                buat Arya
              </p>

              <h1 className="text-3xl leading-relaxed font-light">
                Aku bikin sesuatu
                <br />
                buat kamu.
              </h1>

              <p className="mt-8 text-sm leading-7 text-white/55">
                Nggak perlu berekspektasi tinggi dulu.
                <br />
                Aku cuma pengin kamu lihat sampai selesai.
              </p>

              <button
                onClick={next}
                className="mt-12 px-7 py-3 rounded-full border border-white/20
                text-sm text-white/80 hover:bg-white/10 transition"
              >
                mulai, sayang →
              </button>
            </motion.section>
          )}

          {/* 02 — PIN */}
          {step === 2 && (
            <motion.section
              key="pin"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7 }}
              className="w-full max-w-sm text-center"
            >
              <p className="text-sm text-white/40 mb-6">
                satu tanggal yang harusnya kamu ingat
              </p>

              <h2 className="text-2xl font-light leading-relaxed">
                Kamu masih ingat
                <br />
                tanggal ini?
              </h2>

              <div className="mt-10">
                <input
                  type="password"
                  inputMode="numeric"
                  maxLength={8}
                  value={pin}
                  onChange={(e) => {
                    setPin(e.target.value.replace(/\D/g, ''));
                    setPinError(false);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') checkPin();
                  }}
                  placeholder="DDMMYYYY"
                  className="w-full bg-white/5 border border-white/15 rounded-2xl
                  px-5 py-4 text-center text-xl tracking-[0.3em]
                  outline-none focus:border-white/40 transition"
                />
              </div>

              {pinError && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4 text-sm text-white/50"
                >
                  Bukan itu 😭 coba ingat lagi.
                </motion.p>
              )}

              <button
                onClick={checkPin}
                className="mt-8 px-8 py-3 rounded-full bg-white text-black
                text-sm hover:bg-white/90 transition"
              >
                masuk →
              </button>

              <p className="mt-6 text-xs text-white/25">
                petunjuk: tanggal lahirmu
              </p>
            </motion.section>
          )}

          {/* 03 — RAGUNAN */}
          {step === 3 && (
            <motion.section
              key="ragunan"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-sm text-center"
            >
              <p className="text-xs tracking-[0.3em] uppercase text-white/35 mb-6">
                chapter one
              </p>

              <h2 className="text-3xl font-light">
                First date kita.
              </h2>

              <p className="mt-8 text-sm leading-8 text-white/60">
                Ragunan.
                <br />
                Waktu itu masih malu-malu banget.
                <br />
                Kayaknya kita juga belum sadar
                <br />
                kalau ada yang beda.
              </p>

              <button
                onClick={next}
                className="mt-10 text-sm text-white/60 hover:text-white transition"
              >
                lanjut →
              </button>
            </motion.section>
          )}

          {/* 04 — FOTO RAGUNAN */}
          {step === 4 && (
            <motion.section
              key="ragunan-photo"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-sm"
            >
              <div className="overflow-hidden rounded-3xl bg-white/5">
                <img
                  src="/20250820_201622_lmc_8.4.jpg"
                  alt="Ragunan"
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>

              <p className="mt-5 text-center text-xs text-white/35">
                pulang dari Ragunan
              </p>

              <div className="text-center">
                <button
                  onClick={next}
                  className="mt-8 text-sm text-white/60 hover:text-white transition"
                >
                  lanjut →
                </button>
              </div>
            </motion.section>
          )}

          {/* 05 — MULAI TERASA BEDA */}
          {step === 5 && (
            <motion.section
              key="different"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-sm text-center"
            >
              <p className="text-sm leading-8 text-white/65">
                Setelah hari itu,
                <br />
                kayaknya mulai ada yang beda.
                <br />
                <br />
                Yang tadinya cuma ngobrol biasa,
                <br />
                jadi makin sering cari alasan buat ngobrol.
                <br />
                <br />
                Yang tadinya cuma ketemu,
                <br />
                jadi mulai pengin ketemu lagi.
              </p>

              <p className="mt-8 text-sm leading-8 text-white/80">
                Waktu itu mungkin belum ada yang bilang apa-apa.
                <br />
                Tapi kayaknya...
                <br />
                <span className="text-white">kita sama-sama tahu.</span>
              </p>

              <button
                onClick={next}
                className="mt-10 text-sm text-white/60 hover:text-white transition"
              >
                lanjut →
              </button>
            </motion.section>
          )}

          {/* 06 — DANau SUNTER */}
          {step === 6 && (
            <motion.section
              key="sunter"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-sm text-center"
            >
              <p className="text-xs tracking-[0.3em] uppercase text-white/35 mb-6">
                chapter two
              </p>

              <h2 className="text-3xl font-light">
                Danau Sunter.
              </h2>

              <p className="mt-8 text-sm leading-8 text-white/60">
                Udah sekitar jam 10 malam,
                <br />
                akhirnya kita cuma ngopi di sana.
                <br />
                <br />
                Nggak ada rencana yang gimana-gimana.
                <br />
                Tapi ternyata malam itu
                <br />
                jadi salah satu yang paling aku ingat.
              </p>

              <button
                onClick={next}
                className="mt-10 text-sm text-white/60 hover:text-white transition"
              >
                lanjut →
              </button>
            </motion.section>
          )}

          {/* 07 — FIRST KISS */}
          {step === 7 && (
            <motion.section
              key="first-kiss"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="w-full max-w-sm text-center"
            >
              <p className="text-sm text-white/40">
                dan...
              </p>

              <h2 className="mt-6 text-4xl font-light">
                first kiss kita.
              </h2>

              <p className="mt-6 text-sm text-white/40">
                iya, yang itu.
              </p>

              <button
                onClick={onFlowComplete}
                className="mt-12 px-8 py-3 rounded-full border border-white/20
                text-sm text-white/70 hover:bg-white/10 transition"
              >
                lanjut →
              </button>
            </motion.section>
          )}

        </AnimatePresence>
      </div>
    </main>
  );
}
```
