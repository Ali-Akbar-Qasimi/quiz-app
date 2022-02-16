export default{
    questions: [
        {
            id: 1,
            question: 'Which of the following address check a router when making a decision about routing TCP/IP packets?',
            answers: [
                { text: 'Destination MAC address', correct: true },
                { text: 'Source IP address', correct: false },
                { text: 'Source MAC address', correct: false },
                { text: 'Destination IP address', correct: false }
            ]
        },
        {
            id: 2,
            question: '___________ is a set of rules determining how network devices respond when two devices attempt to use a data 14 channel simultaneously and encounter a data collision.',
            answers: [
                { text: 'CSMA/CA', correct: false },
                { text: 'CP/IP', correct: false },
                { text: 'TCP/UDP', correct: false },
                { text: 'CSMA/CD', correct: true }
            ]
        },
        {
            id: 3,
            question: 'Ethernet standard ___________ BASE-T defines Gigabit Ethernet over UTP cabling.',
            answers: [
                { text: '100', correct: false },
                { text: '10', correct: false },
                { text: '1000', correct: true },
                { text: '1', correct: false }
            ]
        },
        {
            id: 4,
            question: 'Which of the following IEEE 802.3 Ethernet Header and Trailer Fields allows devices on the network to easily synchronize their receiver clocks?',
            answers: [
                { text: 'Frame Check Sequence', correct: false },
                { text: 'Data and Pad', correct: false },
                { text: 'Start Frame Delimiter', correct: false },
                { text: 'preamble', correct: true }
            ]
        },
        {
            id: 5,
            question: 'The host sends packets to its default gateway if the _____________ IP address is in a different subnet than the host.',
            answers: [
                { text: 'Source', correct: false },
                { text: 'Destination', correct: true },
                { text: 'Unicast', correct: false },
                { text: 'Broadcast', correct: false }
            ]
        },
        {
            id: 6,
            question: 'Which of the following protocols resides in the Application TCP/IP Architecture layer?',
            answers: [
                { text: 'SMTP', correct: true },
                { text: 'TCP', correct: false },
                { text: 'Ethernet', correct: false },
                { text: 'IP', correct: false }
            ]
        },
        {
            id: 7,
            question: 'Which of the following protocols resides in the Transport TCP/IP Architecture layer?',
            answers: [
                { text: 'SMTP', correct: false },
                { text: 'TCP', correct: true },
                { text: 'Ethernet', correct: false },
                { text: 'IP', correct: false }
            ]
        },
        {
            id: 8,
            question: 'Which of the following protocols resides in the Internet TCP/IP Architecture layer?',
            answers: [
                { text: 'SMTP', correct: false },
                { text: 'TCP', correct: false },
                { text: 'Ethernet', correct: false },
                { text: 'IP', correct: true }
            ]
        },
        {
            id: 9,
            question: 'Which of the following protocols resides in the Data Link & Physical TCP/IP Architecture layer?',
            answers: [
                { text: 'SMTP', correct: false },
                { text: 'TCP', correct: false },
                { text: 'Ethernet', correct: true },
                { text: 'IP', correct: false }
            ]
        },
        {
            id: 10,
            question: 'Which of the following protocols is used from PC1 to learn information from some other device on the same network?',
            answers: [
                { text: 'ping', correct: false },
                { text: 'ARP', correct: true },
                { text: 'DHCP', correct: false },
                { text: 'DNS', correct: false }
            ]
        },
        {
            id: 11,
            question: 'A __________________ address is an address that enables transmission to every node in a local network.',
            answers: [
                { text: 'Broadcast', correct: true },
                { text: 'Multicast', correct: false },
                { text: 'Unicast', correct: false },
                { text: 'MAC', correct: false }
            ]
        },
        {
            id: 12,
            question: 'TCP and ______________ are the two most commonly used TCP/IP transport layer protocols.',
            answers: [
                { text: 'UDP', correct: true },
                { text: 'HTTP', correct: false },
                { text: 'DNS', correct: false },
                { text: 'SMTP', correct: false }
            ]
        },
        {
            id: 13,
            question: 'Which of the following IEEE 802.3 Ethernet Header and Trailer Fields provides a method for the receiving NIC to determine whether the frame experienced transmission errors?',
            answers: [
                { text: 'Frame Check Sequence', correct: true },
                { text: 'Data and Pad', correct: false },
                { text: 'Start Frame Delimiter', correct: false },
                { text: 'preamble', correct: false }
            ]
        },
        // IS GOING TO BE COMPLETED LATER
        {
            id: 14,
            question: 'Which of the following commands checks the status of the interfaces?',
            answers: [
                { text: 'show interface', correct: false },
                { text: 'show status', correct: false },
                { text: 'show interface status', correct: true },
                { text: 'show status interface', correct: false }
            ]
        },
        {
            id: 15,
            question: 'You are in console line configuration mode. Which of the following commands would place you in enable mode?',
            answers: [
                { text: 'end', correct: true },
                { text: 'back', correct: false },
                { text: 'enable', correct: false },
                { text: 'change', correct: false }
            ]
        },
        {
            id: 16,
            question: 'Which of the following commands copies the configuration from RAM into NVRAM',
            answers: [
                { text: 'copy running-config startup-config', correct: true },
                { text: 'copy startup-config running-config', correct: false },
                { text: 'copy ram nvram', correct: false },
                { text: 'preamble', correct: false }
            ]
        },
        {
            id: 17,
            question: 'In which of the following modes of the CLI could you configure the duplex setting for interface Fast Ethernet 0/2?',
            answers: [
                { text: 'Global configuration mode', correct: false },
                { text: 'Enable mode', correct: false },
                { text: 'interface configuration mode', correct: true },
                { text: 'VLAN mode', correct: false }
            ]
        },
        {
            id: 18,
            question: 'Which of the following commands administratively enables an interface',
            answers: [
                { text: 'shutdown', correct: false },
                { text: 'no shutdown', correct: true },
                { text: 'enable interface', correct: false },
                { text: 'interface enable', correct: false }
            ]
        },
        {
            id: 19,
            question: 'Which of the following commands lists the content of the startup-config (initial config) file',
            answers: [
                { text: 'show startup-config', correct: true },
                { text: 'show initial-config', correct: false },
                { text: 'show content-config', correct: false },
                { text: 'show file-config', correct: false }
            ]
        },
        {
            id: 20,
            question: 'Which of the following type of memory is used to store the configuration used by the switch when it is up and running?',
            answers: [
                { text: 'ROM', correct: false },
                { text: 'RAM', correct: true },
                { text: 'NVRAM', correct: false },
                { text: 'Flash', correct: false }
            ]
        },
        {
            id: 21,
            question: 'Which of the following configuration commands defines the password that all users must use to reach enable mode?',
            answers: [
                { text: 'enable secret "type password"', correct: true },
                { text: 'enable "type password"', correct: false },
                { text: 'secret "type password"', correct: false },
                { text: 'secret enable "type password"', correct: false }
            ]
        },
        {
            id: 22,
            question: 'Which of the following Cisco IOS Software Command Help lists commands that start with int?',
            answers: [
                { text: 'int<Tab>', correct: false },
                { text: 'int ?', correct: false },
                { text: '?', correct: false },
                { text: 'int?', correct: true }
            ]
        },
        {
            id: 23,
            question: 'Why does the formula for the number of hosts per subnet (2H - 2)require the subtraction of two hosts?',
            answers: [
                { text: 'To reserve two addresses for redundant default gateways (routers)', correct: false },
                { text: 'To reserve the two addresses required for DHCP operation', correct: false },
                { text: 'To reserve addresses for the subnet broadcast address and subnet ID', correct: true },
                { text: 'To reserve addresses for the subnet ID and default gateway (router)', correct: false }
            ]
        },
        {
            id: 24,
            question: 'A network designer asked you how many subnet(S) bits does he need to create 200 subnets?',

            answers: [
                { text: '2', correct: false },
                { text: '5', correct: false },
                { text: '8', correct: true },
                { text: '11', correct: false }
            ]
        },
        {
            id: 25,
            question: 'Which of the following IPv4 addresses has a subnet mask 255.255.0.0?',
            answers: [
                { text: '188.187.186.185', correct: true },
                { text: '204.203.202.201', correct: false },
                { text: '55.44.22.11', correct: false },
                { text: '10.0.0.56', correct: false }
            ]
        },
        {
            id: 26,
            question: 'Which of the following IPv4 addresses has a subnet mask 255.255.255.0?',
            answers: [
                { text: '188.187.186.185', correct: false },
                { text: '204.203.202.201', correct: true },
                { text: '55.44.22.11', correct: false },
                { text: '10.0.0.56', correct: false }
            ]
        },
        {
            id: 27,
            question: 'Which of the following ranges is a valid class B network numbers?',
            answers: [
                { text: '128.0.0.0 - 191.255.0.0', correct: true },
                { text: '1.0.0.0 - 126.0.0.0', correct: false },
                { text: '192.0.0.0 - 223.255.255.0', correct: false },
                { text: '224.0.0.0 - 254.255.255.0', correct: false }
            ]
        },
        {
            id: 28,
            question: 'Which of the following ranges is a valid class C network numbers?',
            answers: [
                { text: '128.0.0.0 - 191.255.0.0', correct: false },
                { text: '1.0.0.0 - 126.0.0.0', correct: false },
                { text: '192.0.0.0 - 223.255.255.0', correct: true },
                { text: '224.0.0.0 - 254.255.255.0', correct: false }
            ]
        },
        {
            id: 29,
            question: 'Which of the following is the default mask of the IP 10.2.0.0?',
            answers: [
                { text: '255.255.0.0', correct: false },
                { text: '255.0.0.0', correct: true },
                { text: '255.255.255.0', correct: false },
                { text: '255.255.255.255', correct: false }
            ]
        },
        {
            id: 30,
            question: 'A network designer asked you how many subnets (S) bits does he need to create 100 subnets? (Type only the number)',
            answers: [
                { text: '4', correct: false },
                { text: '5', correct: false },
                { text: '6', correct: false },
                { text: '7', correct: true }
            ]
        },
    ]
}