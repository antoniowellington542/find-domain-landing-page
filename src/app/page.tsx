"use client"

import React, { useState } from "react"

import Image from "next/image";

import NandBoxIcon from "@/assets/nandbox_icon.svg";
import SearchIcon from "@/assets/search_icon.svg";
import DomainCard from "./card";
import axios from "axios";

import { pageStyles } from "@/app/styles";
import { DomainInfoFormattedForClient, WhoisResponse } from "@/protocols/whoisFreaksProtocol";

export default function Home() {
  const [searchvalue, setSearchValue] = useState<string>("")
  const [domainInfo, setDomainInfo] = useState<DomainInfoFormattedForClient | null>(null)

  const styles = pageStyles

  const formatDate = (dateString: string) => {
    const cleanedDateString = dateString.split(' (')[0];

    // Parse the cleaned date string into a Date object
    const date = new Date(cleanedDateString);

    // Format the date into dd/mm/yyyy
    return `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;
  }

  const handleGetDomainInfo = async () => {
    try {
      const response = await fetch(`/api/whois?domain=${searchvalue}`)
      const data: WhoisResponse = await response.json()

      const lastDomainInfo = data

      if (lastDomainInfo) {
        const domainInfoFormattedForClient: DomainInfoFormattedForClient = {
          domain: {
            name: lastDomainInfo?.domain_name,
            createdAt: formatDate(new Date(lastDomainInfo?.create_date).toString()),
            expiryAt: formatDate(new Date(lastDomainInfo?.expiry_date).toString()),
            server: lastDomainInfo?.name_servers.pop(),
            updatedAt: formatDate(new Date(lastDomainInfo?.update_date).toString())
          },
          owner: {
            document: lastDomainInfo?.domain_registrar.iana_id,
            name: lastDomainInfo?.billing_contact.name
          },
          contact: {
            email: lastDomainInfo?.registrant_contact?.email_address,
            name: lastDomainInfo?.registrant_contact?.name
          }
        }

        setDomainInfo(domainInfoFormattedForClient)
      }
    } catch (error) {
      console.log(error)
    }
  }

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
          {domainInfo && (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                gap: 16
              }}
            >
              <div
                style={{
                  flex: 1
                }}
              >
                <DomainCard
                  title="Domínio"
                  itens={[
                    <><strong>Nome:</strong> {domainInfo.domain?.name}</>,
                    <><strong>Servidor DNS:</strong> {domainInfo.domain?.server}</>,
                    <><strong>Criado em:</strong> {domainInfo.domain?.createdAt}</>,
                    <> <strong>Expira em:</strong> {domainInfo.domain?.expiryAt}</>,
                    <><strong>Atualizado em:</strong> {domainInfo.domain?.updatedAt}</>
                  ]}
                  backgroundColor="#E9FFF0"
                />
              </div>
              <div
                style={{
                  flex: 1
                }}
              >
                <DomainCard
                  title="Titular"
                  itens={[
                    <><strong>Titular:</strong> {domainInfo.owner?.name}</>,
                    <><strong>Documento:</strong> {domainInfo.owner?.document}</>
                  ]}
                  backgroundColor="#FAF8E3"
                />
              </div>
              <div
                style={{
                  flex: 1
                }}
              >
                <DomainCard
                  title="Contato"
                  itens={[
                    <><strong>Nome:</strong> {domainInfo.contact?.name}</>,
                    <><strong>Email:</strong> {domainInfo.contact?.email}</>
                  ]}
                  backgroundColor="#F0F5FF"
                />
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
