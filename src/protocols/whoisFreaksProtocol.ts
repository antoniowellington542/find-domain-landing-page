type DomainRegister = {
    iana_id: string;
    registrar_name: string;
    whois_server: string;
    website_url: string;
    email_address: string;
    phone_number: string;
};

type ContactInfo = {
    name: string;
    company: string;
    street: string;
    city: string;
    state: string;
    zip_code: string;
    country_name: string;
    country_code: string;
    email_address: string;
    phone: string;
    fax: string;
    mailing_address: string;
};

type DomainStatus = "clientTransferProhibited";

type RegistryData = {
    domain_name: string;
    query_time: string;
    whois_server: string;
    domain_registered: "yes" | "no";
    create_date: string | "N/A";
    update_date: string | "N/A";
    expiry_date: string | "N/A";
    domain_registrar: DomainRegister;
    name_servers: string[];
    domain_status: DomainStatus[];
    whois_raw_registry: string;
};

export type WhoisResponse = {
    status: boolean;
    domain_name: string;
    query_time: string;
    whois_server: string;
    domain_registered: "yes" | "no";
    create_date: string;
    update_date: string;
    expiry_date: string;
    domain_registrar: DomainRegister;
    reseller_contact: {
        name: string;
        email_address: string;
        phone: string;
    };
    registrant_contact: ContactInfo;
    administrative_contact: ContactInfo;
    technical_contact: ContactInfo;
    billing_contact: ContactInfo;
    name_servers: string[];
    domain_status: DomainStatus[];
    whois_raw_domain: string;
    registry_data: RegistryData;
};

export type DomainInfoFormattedForClient = {
    domain: {
        name?: string
        server?: string
        createdAt?: string
        updatedAt?: string
        expiryAt?: string
    }
    contact: {
        name?: string
        email?: string
    }
    owner: {
        name?: string
        document?: string
    }
}

export type ConsultURLInput = {
    domain: string
}

export type ConsultURLOutput = DomainInfoFormattedForClient