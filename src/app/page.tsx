"use client"

import React from "react"
import Image from "next/image"

import NandBoxIcon from "@/assets/nandbox_icon.svg"
import SearchIcon from "@/assets/search_icon.svg"

import DomainCard, { CardDataType } from "@/app/components/Card"
import usePageController from "@/app/usePageController"

import useStyles from "@/app/styles"

export default function Home() {
  const {
    domainData,
    handleGetDomainInfo,
    searchvalue,
    setSearchValue,
    loading
  } = usePageController()

  const styles = useStyles()

  return (
    <div style={styles.container}>
      <header style={styles.headerContainer}>
        <nav style={styles.navBar}>
          <div style={styles.logoContainer}>
            <Image
              priority
              src={NandBoxIcon}
              alt="nandbox icon"
              width={32}
              height={32}
            />
            <h2 style={styles.logoText}>NandBox</h2>
          </div>
          <div style={styles.buttonContainer}>
            <button style={styles.registerButton}>Registrar</button>
            <button style={styles.loginButton}>Entrar</button>
          </div>
        </nav>
      </header>
      <main style={styles.mainContent}>
        <div style={styles.mainContainer}>
          <div style={styles.centeredContent}>
            <div style={styles.titleContainer}>
              <p style={styles.titleText}>
                Todas as informações do seu domínio na palma da mão!
              </p>
              <div style={styles.searchContainer}>
                <input
                  type="text"
                  placeholder="Pesquisar..."
                  style={styles.searchInput}
                  value={searchvalue}
                  onChange={({ target }) => {
                    setSearchValue(target.value)
                  }}
                />
                <Image
                  priority
                  src={SearchIcon}
                  alt="search icon"
                  width={40}
                  height={40}
                  style={styles.searchIcon}
                  onClick={handleGetDomainInfo}
                />
              </div>
            </div>
          </div>
          <div style={styles.domainContent}>
            {domainData && (
              (["domain", "owner", "contact"] as CardDataType[]).map((key, index) => (
                <div
                  key={index}
                  style={{
                    flex: 1
                  }}
                >
                  <DomainCard
                    cardType={key as CardDataType}
                    domainInfo={domainData}
                    loading={loading}
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
