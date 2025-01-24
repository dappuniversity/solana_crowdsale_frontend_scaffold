"use client"
import { useEffect, useState } from "react"
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js"
import { getAssociatedTokenAddressSync } from "@solana/spl-token"
import { AnchorProvider, Program } from "@coral-xyz/anchor"

// Import config & IDL
import config from "@/app/config.json"
import Crowdsale from "@/app/idl/crowdsale.json"



export default function Home() {
 
  return (
    <div className="page">
      <main className="main">
        <div className="hero">
          <h1>Introducing sDAPP</h1>
          <p>Join our community today!</p>
        </div>
      </main >
    </div >
  );
}