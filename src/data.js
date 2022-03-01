import image32 from './question32.png'
import image58 from './question58.png'
import image98 from './question98.png'
import image119 from './question119.png'
import image147 from './question147.png'
import image198 from './question198.png'

export default{
    questions: [
        {
            id: 1,
            question: 'Which of the following protocols are examples of TCP/IP transport layer protocols? (Choose two answers.)',
            numberThatCanBeSelected: 2,
            answers: [
                { text: 'Ethernet', correct: false },
                { text: 'HTTP', correct: false },
                { text: 'IP', correct: false },
                { text: 'UDP', correct: true },
                { text: 'SMTP', correct: false },
                { text: 'TCP', correct: true }
            ]
        },
        {
            id: 2,
            question: 'Which of the following protocols are examples of TCP/IP data-link layer protocols? (Choose two answers.)',
            numberThatCanBeSelected: 2,
            answers: [
                { text: 'Ethernet', correct: true },
                { text: 'HTTP', correct: false },
                { text: 'IP', correct: false },
                { text: 'UDP', correct: false },
                { text: 'SMTP', correct: false },
                { text: 'TCP', correct: false },
                { text: 'PPP', correct: true }
            ]
        },
        {
            id: 3,
            question: 'The process of HTTP asking TCP to send some data and making sure that it is received correctly is an example of what?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'Same-layer interaction', correct: false },
                { text: 'Adjacent-layer interaction', correct: true },
                { text: 'OSI model', correct: false },
                { text: 'All of these answers are correct', correct: false }
            ]
        },
        {
            id: 4,
            question: 'The process of TCP on one computer marking a TCP segment as segment 1, and the receiving computer then acknowledging the receipt of TCP segment 1 is an example of what?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'Data encapsulation', correct: false },
                { text: 'Same-layer interaction', correct: true },
                { text: 'Adjacent-layer interaction', correct: false },
                { text: 'OSI model', correct: false },
                { text: 'All of these answers are correct', correct: false }
            ]
        },
        {
            id: 5,
            question: 'The process of a web server adding a TCP header to the contents of a web page, followed by adding an IP header and then adding a data-link header and trailer, is an example of what?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'Data encapsulation', correct: true },
                { text: 'Same-layer interaction', correct: false },
                { text: 'OSI model', correct: false },
                { text: 'All of these answers are correct', correct: false }
            ]
        },
        {
            id: 6,
            question: 'Which of the following terms is used specifically to identify the entity created when encapsulating data inside data-link layer headers and trailers?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'Data', correct: false },
                { text: 'Chunk', correct: false },
                { text: 'Segment', correct: false },
                { text: 'Frame', correct: true },
                { text: 'Packet', correct: false }
            ]
        },
        {
            id: 7,
            question: 'Which OSI encapsulation term can be used instead of the term frame?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'Layer 1 PDU', correct: false },
                { text: 'Layer 2 PDU', correct: true },
                { text: 'Layer 3 PDU', correct: false },
                { text: 'Layer 5 PDU', correct: false },
                { text: 'Layer 7 PDU', correct: false }
            ]
        },
        {
            id: 8,
            question: 'In the LAN for a small office, some user devices connect to the LAN using a cable, while others connect using wireless technology (and no cable). Which of the following is true regarding the use of Ethernet in this LAN?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'Only the devices that use cables are using Ethernet.', correct: true },
                { text: 'Only the devices that use wireless are using Ethernet.', correct: false },
                { text: 'Both the devices using cables and those using wireless are using Ethernet.', correct: false },
                { text: 'None of the devices are using Ethernet.', correct: false }
            ]
        },
        {
            id: 9,
            question: 'Which of the following Ethernet standards defines Gigabit Ethernet over UTP cabling?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: '10GBASE-T', correct: false },
                { text: '100GBASE-T', correct: false },
                { text: '1000GBASE-T', correct: true },
                { text: 'None fo the other answers is correct', correct: false }
            ]
        },
        {
            id: 10,
            question: 'Which of the following is true about Ethernet crossover cables for Fast Ethernet?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'Pins 1 and 2 are reversed on the other end of the cable.', correct: false },
                { text: 'Pins 1 and 2 on one end of the cable connect to pins 3 and 6 on the other end of the cable.', correct: true },
                { text: 'Pins 1 and 2 on one end of the cable connect to pins 3 and 4 on the other end of the cable.', correct: false },
                { text: 'The cable can be up to 1000 meters long to cross over between buildings.', correct: false },
                { text: 'None of the other answers is correct.', correct: false }
            ]
        },
        {
            id: 11,
            question: 'Which of the following are advantages of using multimode fiber for an Ethernet link instead of UTP or single-mode fiber?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'To achieve the longest distance possible for that single link.', correct: false },
                { text: 'To extend the link beyond 100 meters while keeping initial costs as low as possible.', correct: true },
                { text: 'To make use of an existing stock of laser-based SFP/SFP+ modules.', correct: false },
                { text: 'To make use of an existing stock of LED-based SFP/SFP+ modules.', correct: false }
            ]
        },
        {
            id: 12,
            question: 'Which of the following is true about the CSMA/CD algorithm?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'The algorithm never allows collisions to occur.', correct: false },
                { text: 'Collisions can happen, but the algorithm defines how the computers should notice a collision and how to recover.', correct: true },
                { text: 'The algorithm works with only two devices on the same Ethernet.', correct: false },
                { text: 'None of the other answers is correct.', correct: false }
            ]
        },
        {
            id: 13,
            question: 'Which of the following is true about the Ethernet FCS field?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'Ethernet uses FCS for error recovery.', correct: false },
                { text: 'It is 2 bytes long.', correct: false },
                { text: 'It resides in the Ethernet trailer, not the Ethernet header.', correct: true },
                { text: 'It is used for encryption.', correct: false }
            ]
        },
        {
            id: 14,
            question: 'Which of the following terms describe Ethernet addresses that can be used to send one frame that is delivered to multiple devices on the LAN? (Choose two answers.)',
            numberThatCanBeSelected: 2,
            answers: [
                { text: 'Burned-in address', correct: false },
                { text: 'Unicast address', correct: false },
                { text: 'Broadcast address', correct: true },
                { text: 'Multicast address', correct: true }
            ]
        },
        {
            id: 15,
            question: 'Which of the following fields in the HDLC header used by Cisco routers does Cisco add, beyond the ISO standard HDLC?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'Flag', correct: false },
                { text: 'Type', correct: true },
                { text: 'Address', correct: false },
                { text: 'FCS', correct: false },
            ]
        },
        {
            id: 16,
            question: 'Two routers, R1 and R2, connect using an Ethernet over MPLS service. The service provides point-to-point service between these two routers only, as a Layer 2 Ethernet service. Which of the following are the most likely to be true about this WAN? (Choose two answers.)',
            numberThatCanBeSelected: 2,
            answers: [
                { text: 'R1 will connect to a physical Ethernet link, with the other end of the cable connected to R2', correct: false },
                { text: 'R1 will connect to a physical Ethernet link, with the other end of the cable connected to a device at the WAN service provider point of presence.', correct: true },
                { text: 'R1 will forward data-link frames to R2 using an HDLC header/trailer.', correct: false },
                { text: 'R1 will forward data-link frames to R2 using an Ethernet header/trailer', correct: true },
            ]
        },
        {
            id: 17,
            question: 'Imagine a network with two routers that are connected with a point-to-point HDLC serial link. Each router has an Ethernet, with PC1 sharing the Ethernet with Router1 and PC2 sharing the Ethernet with Router2. When PC1 sends data to PC2, which of the following is true?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: ' Router1 strips the Ethernet header and trailer off the frame received from PC1, never to be used again.', correct: true },
                { text: ' Router1 encapsulates the Ethernet frame inside an HDLC header and sends the frame to Router2, which extracts the Ethernet frame for forwarding to PC2.', correct: false },
                { text: ' Router1 strips the Ethernet header and trailer off the frame received from PC1, which is exactly re-created by Router2 before forwarding data to PC2.', correct: false },
                { text: ' Router1 removes the Ethernet, IP, and TCP headers and rebuilds the appropriate headers before forwarding the packet to Router2.', correct: false },
            ]
        },
        {
            id: 18,
            question: 'Which of the following does a router normally use when making a decision about routing TCP/IP packets?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'Destination MAC address', correct: false },
                { text: 'Source MAC address', correct: false },
                { text: 'Destination IP address', correct: true},
                { text: 'Source IP address', correct: false },
                { text: 'Destination MAC and IP address', correct: false }
            ]
        },
        {
            id: 19,
            question: 'Which of the following are true about a LAN-connected TCP/IP host and its IP routing (forwarding) choices? ',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'The host always sends packets to its default gateway.', correct: false },
                { text: 'The host never sends packets to its default gateway.', correct: false },
                { text: ' The host sends packets to its default gateway if the destination IP address is in a different subnet than the host.', correct: true},
                { text: ' The host sends packets to its default gateway if the destination IP address is in the same subnet as the host.', correct: false }
            ]
        },
        {
            id: 20,
            question: 'Which of the following are functions of a routing protocol? (Choose two answers.)',
            numberThatCanBeSelected: 2,
            answers: [
                { text: 'Advertising known routes to neighboring routers', correct: true },
                { text: 'Learning routes for subnets directly connected to the router', correct: false },
                { text: 'Learning routes and putting those routes into the routing table for routes advertised to the router by its neighboring routers', correct: true},
                { text: 'Forwarding IP packets based on a packet’s destination IP address', correct: false }
            ]
        },
        {
            id: 21,
            question: 'A company implements a TCP/IP network, with PC1 sitting on an Ethernet LAN. Which of the following protocols and features requires PC1 to learn information from some other server device?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'ARP', correct: false },
                { text: 'ping', correct: false },
                { text: 'DNS', correct: true},
                { text: 'None of these answers is correct.', correct: false }
            ]
        },
        {
            id: 22,
            question: ' A company implements a TCP/IP network, with PC1 sitting on an Ethernet LAN. Which of the following protocols and features requires PC1 to learn information from some other server device?',
            numberThatCanBeSelected: 2,
            answers: [
                { text: 'User mode', correct: true },
                { text: 'Enable mode', correct: true },
                { text: 'Global configuration mode', correct: false},
                { text: 'Interface configuration mode', correct: false }
            ]
        },
        {
            id: 23,
            question: 'In which of the following modes of the CLI could you type the command reload and expect the switch to reboot?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'User mode', correct: false },
                { text: 'Enable mode', correct: true },
                { text: 'Global configuration mode', correct: false},
                { text: 'Interface configuration mode', correct: false }
            ]
        },
        {
            id: 24,
            question: ' Which of the following is a difference between Telnet and SSH as supported by a Cisco switch?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'SSH encrypts the passwords used at login, but not other traffic; Telnet encrypts nothing.', correct: false },
                { text: 'SSH encrypts all data exchange, including login passwords; Telnet encrypts nothing.', correct: true },
                { text: 'Telnet is used from Microsoft operating systems, and SSH is used from UNIX and Linux operating systems.', correct: false},
                { text: 'Telnet encrypts only password exchanges; SSH encrypts all data exchanges.', correct: false }
            ]
        },
        {
            id: 25,
            question: 'What type of switch memory is used to store the configuration used by the switch when it is up and working?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'RAM', correct: true },
                { text: 'ROM', correct: false },
                { text: 'Flash', correct: false},
                { text: 'NVRAM', correct: false },
                { text: 'bubble', correct: false }
            ]
        },
        {
            id: 26,
            question: 'What command copies the configuration from RAM into NVRAM?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'copy running-config tftp', correct: false },
                { text: 'copy tftp running-config', correct: false },
                { text: 'copy running-config start-up-config', correct: false},
                { text: 'copy start-up-config running-config', correct: false },
                { text: 'copy startup-config running-config', correct: false },
                { text: 'copy running-config startup-config', correct: true }
            ]
        },
        {
            id: 27,
            question: 'switch user is currently in console line configuration mode. Which of the following would place the user in enable mode? (Choose two answers.)',
            numberThatCanBeSelected: 2,
            answers: [
                { text: 'Using the exit command once', correct: false },
                { text: 'Using the end command once', correct: true },
                { text: 'Pressing the Ctrl+Z key sequence once', correct: true},
                { text: 'Using the quit command', correct: false }
            ]
        },
        {
            id: 28,
            question: 'Which of the following statements describes part of the process of how a switch decides to forward a frame destined for a known unicast MAC address?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'It compares the unicast destination address to the bridging, or MAC address, table.', correct: true },
                { text: 'It compares the unicast source address to the bridging, or MAC address, table.', correct: false },
                { text: 'It forwards the frame out all interfaces in the same VLAN except for the incoming interface.', correct: false},
                { text: 'It compares the destination IP address to the destination MAC address.', correct: false },
                { text: 'It compares the frame’s incoming interface to the source MAC entry in the MAC address table.', correct: false }
            ]
        },
        {
            id: 29,
            question: 'Which of the following statements describes part of the process of how a LAN switch decides to forward a frame destined for a broadcast MAC address?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'It compares the unicast destination address to the bridging, or MAC address, table.', correct: false },
                { text: 'It compares the unicast source address to the bridging, or MAC address, table.', correct: false },
                { text: 'It forwards the frame out all interfaces in the same VLAN except for the incoming interface.', correct: true},
                { text: 'It compares the destination IP address to the destination MAC address.', correct: false },
                { text: 'It compares the frame’s incoming interface to the source MAC entry in the MAC address table.', correct: false }
            ]
        },
        {
            id: 30,
            question: 'Which of the following statements best describes what a switch does with a frame destined for an unknown unicast address?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'It forwards out all interfaces in the same VLAN except for the incoming interface.', correct: true},
                { text: 'It forwards the frame out the one interface identified by the matching entry in the MAC address table.', correct: false },
                { text: 'It compares the destination IP address to the destination MAC address.', correct: false},
                { text: 'It compares the frame’s incoming interface to the source MAC entry in the MAC address table.', correct: false },
            ]
        },
        {
            id: 31,
            question: 'Which of the following comparisons does a switch make when deciding whether a new MAC address should be added to its MAC address table?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'It compares the unicast destination address to the bridging, or MAC address, table.', correct: false },
                { text: 'It compares the unicast source address to the bridging, or MAC address, table', correct: true },
                { text: 'It compares the VLAN ID to the bridging, or MAC address, table.', correct: false},
                { text: 'It compares the destination IP address’s ARP cache entry to the bridging, or MAC address, table.', correct: false },
            ]
        },
        {
            id: 32,
            question: 'Consider the following output from a Cisco Catalyst switch: Which of the following answers is true about this switch?',
            numberThatCanBeSelected: 1,
            image: image32,
            answers: [
                { text: 'The output proves that port Gi0/2 connects directly to a device that uses address 02BB.BBBB.BBBB.', correct: false },
                { text: 'The switch has learned three MAC addresses since the switch powered on.', correct: false },
                { text: 'The three listed MAC addresses were learned based on the destination MAC address of frames forwarded by the switch.', correct: false},
                { text: '02CC.CCCC.CCCC was learned from the source MAC address of a frame that entered port Gi0/3.', correct: true },
            ]
        },
        {
            id: 33,
            question: 'Imagine that you have configured the enable secret command, followed by the enable password command, from the console. You log out of the switch and log back in at the console. Which command defines the password that you had to enter to access privileged mode?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'enable Password', correct: false },
                { text: 'enable secret', correct: true },
                { text: 'Neither', correct: false},
                { text: 'The password command, if it is configured', correct: false },
            ]
        },
        {
            id: 34,
            question: 'An engineer wants to set up simple password protection with no usernames for some switches in a lab, for the purpose of keeping curious coworkers from logging in to the lab switches from their desktop PCs. Which of the following commands would be a useful part of that configuration?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'A login vty mode subcommand', correct: true },
                { text: 'A password password console subcommand', correct: false },
                { text: 'A login local vty subcommand', correct: false},
                { text: 'A transport input ssh vty subcommand', correct: false },
            ]
        },
        {
            id: 35,
            question: 'An engineer had formerly configured a Cisco 2960 switch to allow Telnet access so that the switch expected a password of mypassword from the Telnet user. The engineer then changed the configuration to support Secure Shell. Which of the following commands could have been part of the new configuration? (Choose two answers.)',
            numberThatCanBeSelected: 2,
            answers: [
                { text: 'A username name secret password vty mode subcommand', correct: false },
                { text: 'A username name secret password global configuration command', correct: true },
                { text: 'A login local vty mode subcommand', correct: true},
                { text: 'A transport input ssh global configuration command', correct: false },
            ]
        },
        {
            id: 36,
            question: 'A Layer 2 switch configuration places all its physical ports into VLAN 2. The IP addressing plan shows that address 172.16.2.250 (with mask 255.255.255.0) is reserved for use by this new LAN switch and that 172.16.2.254 is already configured on the router connected to that same VLAN. The switch needs to support SSH connections into the switch from any subnet in the network. Which of the following commands are part of the required configuration in this case? (Choose two answers.)',
            numberThatCanBeSelected: 2,
            answers: [
                { text: 'The ip address 172.16.2.250 255.255.255.0 command in interface vlan 1 configuration mode.', correct: false },
                { text: 'The ip address 172.16.2.250 255.255.255.0 command in interface vlan 2 configuration mode.', correct: true },
                { text: 'The ip default-gateway 172.16.2.254 command in global configuration mode.', correct: true},
                { text: 'The switch cannot support SSH because all its ports connect to VLAN 2, and the IP address must be configured on interface VLAN 1.', correct: false },
            ]
        },
        {
            id: 37,
            question: 'Which of the following line subcommands tells a switch to wait until a show command’s output has completed before displaying log messages on the screen',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'Logging synchronous', correct: true },
                { text: 'no ip domain-lookup', correct: false },
                { text: 'exec-timeout 0 0', correct: false},
                { text: 'history size 15', correct: false },
            ]
        },
        {
            id: 38,
            question: 'Which of the following describes a way to disable IEEE standard autonegotiation on a 10/100 port on a Cisco switch?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'Configure the negotiate disable interface subcommand', correct: false },
                { text: 'Configure the no negotiate interface subcommand', correct: false },
                { text: 'Configure the speed 100 interface subcommand', correct: false},
                { text: 'Configure the duplex half interface subcommand', correct: false },
                { text: 'Configure the duplex full interface subcommand', correct: false },
                { text: 'Configure the speed 100 and duplex full interface subcommands', correct: true },
            ]
        },
        {
            id: 39,
            question: 'In which of the following modes of the CLI could you configure the duplex setting for interface Fast Ethernet 0/5?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'User mode', correct: false },
                { text: 'Enable mode', correct: false },
                { text: 'Global configuration mode', correct: false},
                { text: 'VLAN mode', correct: false },
                { text: 'Interface configuration mode', correct: true },
            ]
        },
        {
            id: 40,
            question: 'In which of the following modes of the CLI could you configure the duplex setting for interface Fast Ethernet 0/5?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'User mode', correct: false },
                { text: 'Enable mode', correct: false },
                { text: 'Global configuration mode', correct: false},
                { text: 'VLAN mode', correct: false },
                { text: 'Interface configuration mode', correct: true },
            ]
        },
        {
            id: 41,
            question: 'A Cisco Catalyst switch connects with its Gigabit0/1 port to an end user’s PC. The end user, thinking the user is helping, manually sets the PC’s OS to use a speed of 1000 Mbps and to use full duplex, and disables the use of autonegotiation. The switch’s G0/1 port has default settings for speed and duplex. What speed and duplex settings will the switch decide to use? (Choose two answers.)',
            numberThatCanBeSelected: 2,
            answers: [
                { text: 'Full duplex', correct: true },
                { text: 'Half duplex', correct: false },
                { text: '10 Mbps', correct: false},
                { text: '1000 Mbps', correct: true },
            ]
        },
        {
            id: 42,
            question: 'Switch SW1 uses its Gigabit 0/1 interface to connect to switch SW2’s Gigabit 0/2 interface. SW2’s Gi0/2 interface is configured with the speed 1000 and duplex full commands. SW1 uses all defaults for interface configuration commands on its Gi0/1 interface. Which of the following are true about the link after it comes up? (Choose two answers.)',
            numberThatCanBeSelected: 2,
            answers: [
                { text: 'The link works at 1000 Mbps (1 Gbps).', correct: true },
                { text: 'SW1 attempts to run at 10 Mbps because SW2 has effectively disabled IEEE standard autonegotiation.', correct: false },
                { text: 'The link runs at 1 Gbps, but SW1 uses half duplex and SW2 uses full duplex.', correct: false},
                { text: 'Both switches use full duplex.', correct: true },
            ]
        },
        {
            id: 43,
            question: 'Switch SW1 connects via a cable to switch SW2’s G0/1 port. Which of the following conditions is the most likely to cause SW1’s late collision counter to continue to increment?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'SW2’s G0/1 has been configured with a shutdown interface subcommand.', correct: false },
                { text: 'The two switches have been configured with different values on the speed interface subcommand.', correct: false },
                { text: 'A duplex mismatch exists with SW1 set to full duplex.', correct: false},
                { text: 'A duplex mismatch exists with SW1 set to half duplex.', correct: true },
            ]
        },
        {
            id: 44,
            question: 'In a LAN, which of the following terms best equates to the term VLAN?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'Collision domain', correct: false },
                { text: 'Broadcast domain', correct: true },
                { text: 'Subnet', correct: false},
                { text: 'Single switch', correct: false },
                { text: 'Trunk', correct: false }
            ]
        },
        {
            id: 45,
            question: 'Imagine a switch with three configured VLANs. How many IP subnets are required, assuming that all hosts in all VLANs want to use TCP/IP?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: '0', correct: false },
                { text: '1', correct: false },
                { text: '2', correct: false},
                { text: '3', correct: true },
                { text: 'You cannot tell from the information provided', correct: false }
            ]
        },
        {
            id: 46,
            question: 'Switch SW1 sends a frame to switch SW2 using 802.1Q trunking. Which of the answers describes how SW1 changes or adds to the Ethernet frame before forwarding the frame to SW2?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'Inserts a 4-byte header and does change the MAC addresses', correct: false },
                { text: 'Inserts a 4-byte header and does not change the MAC addresses', correct: true },
                { text: 'Encapsulates the original frame behind an entirely new Ethernet header', correct: false},
                { text: 'None of the other answers are correct', correct: false }
            ]
        },
        {
            id: 47,
            question: 'Imagine that you are told that switch 1 is configured with the dynamic auto parameter for trunking on its Fa0/5 interface, which is connected to switch 2. You have to configure switch 2. Which of the following settings for trunking could allow trunking to work? (Choose two answers.)',
            numberThatCanBeSelected: 2,
            answers: [
                { text: 'on', correct: true },
                { text: 'dynamic auto', correct: false },
                { text: 'dynamic desirable', correct: true},
                { text: 'access', correct: false },
                { text: 'Nne of the other answers are correct', correct: false }
            ]
        },
        {
            id: 48,
            question: 'A switch has just arrived from Cisco. The switch has never been configured with any VLANs, but VTP has been disabled. An engineer configures the vlan 22 and name Hannahs-VLAN commands and then exits configuration mode. Which of the following are true? (Choose two answers.)',
            numberThatCanBeSelected: 2,
            answers: [
                { text: 'VLAN 22 is listed in the output of the show vlan brief command.', correct: true },
                { text: 'VLAN 22 is listed in the output of the show running-config command.', correct: true },
                { text: 'VLAN 22 is not created by this process.', correct: false},
                { text: 'VLAN 22 does not exist in that switch until at least one interface is assigned to that VLAN.', correct: false },
            ]
        },
        {
            id: 49,
            question: 'Which of the following commands identify switch interfaces as being trunking interfaces: interfaces that currently operate as VLAN trunks? (Choose two answers.)',
            numberThatCanBeSelected: 2,
            answers: [
                { text: 'show interfaces', correct: false },
                { text: 'show interfaces switchport', correct: true },
                { text: 'show interfaces trunk', correct: true},
                { text: 'show trunks', correct: false },
            ]
        },
        {
            id: 50,
            question: 'In a switch that disables VTP, an engineer configures the commands vlan 30 and shutdown vlan 30. Which answers should be true about this switch? (Choose two answers.)',
            numberThatCanBeSelected: 2,
            answers: [
                { text: 'The show vlan brief command should list VLAN 30.', correct: true },
                { text: 'The show running-config command should list VLAN 30.', correct: true },
                { text: 'The switch should forward frames that arrive in access ports in VLAN 30.', correct: false},
                { text: 'The switch should forward frames that arrive in trunk ports tagged with VLAN 30.', correct: false },
            ]
        },
        {
            id: 51,
            question: 'The show interfaces g0/1 trunk command provides three lists of VLAN IDs. Which items would limit the VLANs that appear in the first of the three lists of VLANs?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'A shutdown vlan 30 global command', correct: false },
                { text: 'A switchport trunk allowed vlan interface subcommand', correct: true },
                { text: 'An STP choice to block on G0/1', correct: false},
                { text: 'A no vlan 30 global command', correct: false },
            ]
        },
        {
            id: 52,
            question: 'Which of the following port states are stable states used when STP has completed convergence? (Choose two answers.)',
            numberThatCanBeSelected: 2,
            answers: [
                { text: 'Blocking', correct: true },
                { text: 'Forwarding', correct: true },
                { text: 'Listening', correct: false},
                { text: 'Learning', correct: false },
                { text: 'Discarding', correct: false },
            ]
        },
        {
            id: 53,
            question: 'Which of the following bridge IDs wins election as root, assuming that the switches with these bridge IDs are in the same network?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: '32769:0200.1111.1111', correct: false },
                { text: '32769:0200.2222.2222', correct: true },
                { text: '4097:0200.1111.1111', correct: false},
                { text: '4097:0200.2222.2222', correct: false },
                { text: '40961:0200.1111.1111', correct: false },
            ]
        },
        {
            id: 54,
            question: 'Which of the following are transitory port states used only during the process of STP convergence? (Choose two answers.)',
            numberThatCanBeSelected: 2,
            answers: [
                { text: 'Blocking', correct: false },
                { text: 'Forwarding', correct: false },
                { text: 'Listening', correct: true},
                { text: 'Learning', correct: true },
                { text: 'Discarding', correct: false },
            ]
        },
        {
            id: 55,
            question: 'Which of the following facts determines how often a nonroot bridge or switch sends an STP Hello BPDU message?',
            numberThatCanBeSelected: 2,
            answers: [
                { text: ' The Hello timer as configured on that switch.', correct: false },
                { text: 'The Hello timer as configured on the root switch.', correct: true },
                { text: 'It is always every 2 seconds.', correct: false},
                { text: 'The switch reacts to BPDUs received from the root switch by sending another BPDU 2 seconds after receiving the root BPDU.', correct: false },
            ]
        },
        {
            id: 56,
            question: 'Which of the following RSTP port states have the same name and purpose as a port state in traditional STP? (Choose two answers.)',
            numberThatCanBeSelected: 2,
            answers: [
                { text: 'Blocking', correct: false },
                { text: 'Forwarding', correct: true },
                { text: 'Listening', correct: false},
                { text: 'Learning', correct: true },
                { text: 'Discarding', correct: false },
            ]
        },
        {
            id: 57,
            question: 'RSTP adds features beyond STP that enable ports to be used for a role if another port on the same switch fails. Which of the following statements correctly describe a port role that is waiting to take over for another port role? (Choose two answers.)',
            numberThatCanBeSelected: 2,
            answers: [
                { text: 'An alternate port waits to become a root port.', correct: true },
                { text: 'A backup port waits to become a root port.', correct: false },
                { text: 'An alternate port waits to become designated port.', correct: false},
                { text: 'A backup port waits to become a designated port.', correct: true },
            ]
        },
        {
            id: 58,
            question: 'What STP feature causes an interface to be placed in the forwarding state as soon as the interface is physically active?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'STP', correct: false },
                { text: 'EtherChannel', correct: false },
                { text: 'Root Guard', correct: false},
                { text: 'PortFast', correct: true },
            ]
        },
        {
            id: 59,
            question: 'Which type value on the spanning-tree mode type global command enables the use of RSTP? ',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'rapid-pvst', correct: true },
                { text: 'pvst', correct: false },
                { text: 'rstp', correct: false},
                { text: 'rpvst', correct: false },
            ]
        },
        {
            id: 60,
            question: 'Examine the following output from the show spanning-tree vlan 5 command, which describes a root switch in a LAN. Which answers accurately describe facts related to the root’s bridge ID?(Choose two answers.)',
            numberThatCanBeSelected: 2,
            image: image58,
            answers: [
                { text: 'The system ID extension value, in decimal, is 5.', correct: true },
                { text: 'The root’s configured priority value is 32773.', correct: false },
                { text: 'The root’s configured priority value is 32768.', correct: true},
                { text: 'The system ID extension value, in hexadecimal, is 1833.9d7b.0e80.', correct: false },
            ]
        },
        {
            id: 61,
            question: 'An engineer configures a switch to put interfaces G0/1 and G0/2 into the same Layer 2 EtherChannel. Which of the following terms is used in the configuration commands?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'EtherChannel', correct: false },
                { text: 'PortChannel', correct: false },
                { text: 'Ethernet-channel', correct: false},
                { text: 'Channel-group', correct: true },
            ]
        },
        {
            id: 62,
            question: 'Which combinations of keywords on the channel-group interface subcommand on two neighboring switches will cause the switches to use LACP and attempt to add the link to the EtherChannel? (Choose two answers.)',
            numberThatCanBeSelected: 2,
            answers: [
                { text: 'desirable and active', correct: false },
                { text: 'passive and active', correct: true },
                { text: 'active and auto', correct: false},
                { text: 'active and active', correct: true },
            ]
        },
        {
            id: 63,
            question: 'A Cisco Catalyst switch needs to send frames over a Layer 2 EtherChannel. Which answer best describes how the switch balances the traffic over the four active links in the channel?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'Breaks each frame into fragments of approximately one-fourth of the original frame, sending one fragment over each link', correct: false },
                { text: 'Sends the entire frame over one link, alternating links in sequence for each successive frame', correct: false },
                { text: 'Sends the entire frame over one link, choosing the link by applying some math to fields in each frame’s headers', correct: true},
                { text: 'Sends the entire frame over one link, using the link with the lowest percent utilization as the next link to use', correct: false },
            ]
        },
        {
            id: 64,
            question: 'Host A is a PC, connected to switch SW1 and assigned to VLAN 1. Which of the following are typically assigned an IP address in the same subnet as host A? (Choose two answers.)',
            numberThatCanBeSelected: 2,
            answers: [
                { text: "The local router's WAN interface", correct: false },
                { text: "The local router's LAN interface", correct: true },
                { text: 'All other hosts attached to the same switch', correct: true},
                { text: 'Other hosts attached to the same switch and also in VLAN 1', correct: false },
            ]
        },
        {
            id: 65,
            question: 'Why does the formula for the number of hosts per subnet (2 to the power of H – 2) require the subtraction of two hosts?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: "To reserve two addresses for redundant default gateways (routers)", correct: false },
                { text: "To reserve the two addresses required for DHCP operation", correct: false },
                { text: 'To reserve addresses for the subnet ID and default gateway (router)', correct: false},
                { text: 'To reserve addresses for the subnet broadcast address and subnet ID', correct: true },
            ]
        },
        {
            id: 66,
            question: ' A Class B network needs to be subnetted such that it supports 100 subnets and 100 hosts/subnet. Which of the following answers list a workable combination for the number of network, subnet, and host bits? (Choose two answers.)',
            numberThatCanBeSelected: 2,
            answers: [
                { text: "Network = 16, subnet = 7, host = 7", correct: false },
                { text: "Network = 16, subnet = 8, host = 8", correct: true },
                { text: 'Network = 16, subnet = 8, host = 7', correct: true},
                { text: 'Network = 8, subnet = 7, host = 17', correct: false },
            ]
        },
        {
            id: 67,
            question: 'Which of the following are private IP networks? (Choose two answers.)',
            numberThatCanBeSelected: 2,
            answers: [
                { text: '172.31.0.0', correct: true },
                { text: '172.32.0.0', correct: false },
                { text: '192.168.255.0', correct: true},
                { text: '192.1.168.0', correct: false },
                { text: '11.0.0.0', correct: false }
            ]
        },
        {
            id: 68,
            question: ' Before Class B network 172.16.0.0 is subnetted by a network engineer, what parts of the structure of the IP addresses in this network already exist, with a specific size? (Choose two answers.)',
            numberThatCanBeSelected: 2,
            answers: [
                { text: 'network', correct: true },
                { text: 'Subnet', correct: false },
                { text: 'Host', correct: true},
                { text: 'Broadcast', correct: false }
            ]
        },
        {
            id: 69,
            question: 'A network engineer spends time thinking about the entire Class B network 172.16.0.0 and how to subnet that network. He then chooses how to subnet this Class B network and creates an addressing and subnetting plan, on paper, showing his choices. If you compare his thoughts about this network before subnetting the network to his thoughts about this network after mentally subnetting the network, which of the following occurred to the parts of the structure of addresses in this network?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'The subnet part got smaller.', correct: false },
                { text: 'The host part got smaller.', correct: true },
                { text: 'The network part got smaller.', correct: false},
                { text: 'The host part was removed.', correct: false },
                { text: 'The network part was removed.', correct: false }
            ]
        },
        {
            id: 70,
            question: 'Which of the following are not valid Class A network IDs? (Choose two answers.)',
            numberThatCanBeSelected: 2,
            answers: [
                { text: '1.0.0.0', correct: false },
                { text: '130.0.0.0', correct: true },
                { text: '127.0.0.0', correct: true},
                { text: '9.0.0.0', correct: false }
            ]
        },
        {
            id: 71,
            question: 'Which of the following are not valid Class A network IDs?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: '130.0.0.0', correct: false },
                { text: '191.255.0.0', correct: false },
                { text: '128.0.0.0', correct: false},
                { text: '150.255.0.0', correct: false },
                { text: 'All are valid class B network IDs.', correct: true }
            ]
        },
        {
            id: 72,
            question: 'Which of the following are true about IP address 172.16.99.45’s IP network? (Choose two answers.)',
            numberThatCanBeSelected: 2,
            answers: [
                { text: 'The network ID is 172.0.0.0', correct: false },
                { text: 'The network is a Class B network', correct: true },
                { text: 'The default mask for the network is 255.255.255.0.', correct: false},
                { text: 'The number of host bits in the unsubnetted network is 16.', correct: true } 
            ]
        },
        {
            id: 73,
            question: 'Which of the following are true about IP address 192.168.6.7’s IP network? (Choose two answers.)',
            numberThatCanBeSelected: 2,
            answers: [
                { text: 'The network ID is 192.168.6.0', correct: true },
                { text: 'The network is a Class B network', correct: false },
                { text: 'The default mask for the network is 255.255.255.0.', correct: true},
                { text: 'The number of host bits in the unsubnetted network is 16.', correct: false } 
            ]
        },
        {
            id: 74,
            question: 'Which of the following is a network broadcast address?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: '10.1.255.255', correct: false },
                { text: '192.168.255.1', correct: false },
                { text: '224.1.1.255', correct: false},
                { text: '172.30.255.255', correct: true } 
            ]
        },
        {
            id: 75,
            question: 'Which of the following answers lists the prefix (CIDR) format equivalent of 255.255.254.0?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: '/19', correct: false },
                { text: '/20', correct: false },
                { text: '/23', correct: true},
                { text: '/24', correct: false },
                { text: '/25', correct: false } 
            ]
        },
        {
            id: 76,
            question: 'Which of the following answers lists the prefix (CIDR) format equivalent of 255.255.255.240?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: '/26', correct: false },
                { text: '/28', correct: true },
                { text: '/27', correct: false },
                { text: '/30', correct: false },
                { text: '/29', correct: false } 
            ]
        },
        {
            id: 77,
            question: 'Which of the following answers lists the dotted-decimal notation (DDN) equivalent of /30?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: '255.255.255.192', correct: false },
                { text: '255.255.255.252', correct: true },
                { text: '255.255.255.240', correct: false },
                { text: '255.255.254.0', correct: false },
                { text: '255.255.255.0', correct: false }
            ]
        },
        {
            id: 78,
            question: 'Working at the help desk, you receive a call and learn a user’s PC IP address and mask (10.55.66.77, mask 255.255.255.0). When thinking about this using classful logic, you determine the number of network (N), subnet (S), and host (H) bits. Which of the following is true in this case?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'N=12', correct: false },
                { text: 'S-12', correct: false },
                { text: 'H=8', correct: true },
                { text: 'S=8', correct: false },
                { text: 'N=24', correct: false }
            ]
        },
        {
            id: 79,
            question: 'Working at the help desk, you receive a call and learn a user’s PC IP address and mask (192.168.9.1/27). When thinking about this using classful logic, you determine the number of network (N), subnet (S), and host (H) bits. Which of the following is true in this case?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'N=24', correct: true },
                { text: 'S-24', correct: false },
                { text: 'H=8', correct: false },
                { text: 'H=7', correct: false }
            ]
        },
        {
            id: 80,
            question: 'Which of the following statements is true about classless IP addressing concepts?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'Uses a 128-bit IP address', correct: false },
                { text: 'Applies only for Class A and B networks', correct: false },
                { text: 'Separates IP addresses into network, subnet, and host parts', correct: false },
                { text: 'Ignores Class A, B, and C network rules', correct: true }
            ]
        },
        {
            id: 81,
            question: 'Which of the following masks, when used as the only mask within a Class B network, would supply enough subnet bits to support 100 subnets? (Choose two.)',
            numberThatCanBeSelected: 2,
            answers: [
                { text: '/24', correct: true },
                { text: '255.255.255.252', correct: true },
                { text: '/20', correct: false },
                { text: '255.255.252.0', correct: false }
            ]
        },
        {
            id: 82,
            question: 'When you think about an IP address using classful addressing rules, an address can have three parts: network, subnet, and host. If you examined all the addresses in one subnet, in binary, which of the following answers correctly states which of the three parts of the addresses will be equal among all addresses? (Choose the best answer.)',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'Network part only', correct: false },
                { text: 'Subnet part only', correct: false },
                { text: 'Host part only', correct: false },
                { text: 'Network and subnet parts', correct: true },
                { text: 'Subnet and host parts', correct: false }
            ]
        },
        {
            id: 83,
            question: 'Which of the following statements are true regarding the binary subnet ID, subnet broadcast address, and host IP address values in any single subnet? (Choose two answers.)',
            numberThatCanBeSelected: 2,
            answers: [
                { text: 'The host part of the broadcast address is all binary 0s', correct: false },
                { text: 'The host part of the subnet ID is all binary 0s.', correct: true },
                { text: 'The host part of the a usable IP address must not be all binary 0s.', correct: false },
                { text: 'The host part of the usable IP address can have all binary 1s.', correct: true },
                { text: 'The host part of any usable IP address must no be all binary 0s.', correct: false }
            ]
        },
        {
            id: 84,
            question: 'Which of the following is the resident subnet ID for IP address 10.7.99.133/24?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: '10.0.0.0', correct: false },
                { text: '10.7.0.0', correct: false },
                { text: '10.7.99.0', correct: true },
                { text: '10.7.99.128', correct: false },
            ]
        },
        {
            id: 85,
            question: 'Which of the following is the resident subnet for IP address 192.168.44.97/30?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: '192.168.44.0', correct: false },
                { text: '192.168.44.64', correct: false },
                { text: '192.168.44.96', correct: true },
                { text: '192.168.44.128', correct: false },
            ]
        },
        {
            id: 86,
            question: 'Which of the following is the subnet broadcast address for the subnet in which IP address 172.31.77.201/27 resides?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: '172.31.201.255', correct: false },
                { text: '172.31.255.255', correct: false },
                { text: '172.31.77.223', correct: true },
                { text: '172.31.77.207', correct: false },
            ]
        },
        {
            id: 87,
            question: 'Which of the following installation steps are more likely required on a Cisco router, but not typically required on a Cisco switch? (Choose two answers.)',
            numberThatCanBeSelected: 2,
            answers: [
                { text: 'connect Ethernet cables', correct: false },
                { text: 'connect serial cables', correct: true },
                { text: 'connect to the console port', correct: false },
                { text: 'connect th power cable', correct: false },
                { text: 'Turn the on/off switch to "on"', correct: true }
            ]
        },
        {
            id: 88,
            question: 'Which of the following commands might you see associated with a router CLI, but not with a switch CLI?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'The show mac address-table command', correct: false },
                { text: 'The show ip route command', correct: true },
                { text: 'The show running-config command', correct: false },
                { text: 'The show interfaces status command', correct: false }
            ]
        },
        {
            id: 89,
            question: 'Which answers list a task that could be helpful in making a router interface G0/0 ready to route packets? (Choose two answers.)',
            numberThatCanBeSelected: 2,
            answers: [
                { text: 'Configuring the ip address address mask command in G0/0 configuration mode', correct: true },
                { text: 'Configuring the ip address address and ip mask mask commands in G0/0 configuration mode', correct: false },
                { text: 'Configuring the no shutdown command in G0/0 configuration mode', correct: true },
                { text: 'Setting the interface description in G0/0 configuration mode', correct: false }
            ]
        },
        {
            id: 90,
            question: 'The output of the show ip interface brief command on R1 lists interface status codes of “down” and “down” for interface GigabitEthernet 0/0. The interface connects to a LAN switch with a UTP straight-through cable. Which of the following could be true?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'The shutdown command is currently configured for router interface G0/0.', correct: false },
                { text: 'The shutdown command is currently configured for the switch interface on the other end of the cable. ', correct: false },
                { text: 'The router was never configured with an ip address command on the interface.', correct: true },
                { text: 'The router was configured with the no ip address command.', correct: false }
            ]
        },
        {
            id: 91,
            question: 'Which of the following commands do not list the IP address and mask of at least one interface? (Choose two answers.)',
            numberThatCanBeSelected: 2,
            answers: [
                { text: 'show running-config', correct: false },
                { text: 'show protocols type number', correct: false },
                { text: 'show ip interface brief', correct: true },
                { text: 'show interfaces', correct: false },
                { text: 'show version', correct: true },
            ]
        },
        {
            id: 92,
            question: 'Which of the following is different on the Cisco switch CLI for a Layer 2 switch as compared with the Cisco router CLI?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'The commands used to configure simple password checking for the console', correct: false },
                { text: 'The number of IP addresses configured', correct: true },
                { text: 'The configuration of the device’s hostname', correct: false },
                { text: 'The configuration of an interface description', correct: false },
            ]
        },
        {
            id: 93,
            question: 'Router R1 lists a route in its routing table. Which of the following answers list a fact from a route that the router uses when matching the packet’s destination address? (Choose two answers.)',
            numberThatCanBeSelected: 2,
            answers: [
                { text: 'Mask', correct: true },
                { text: 'Next-hop router', correct: false },
                { text: 'Subnet ID', correct: true },
                { text: 'Outgoing interface', correct: false },
            ]
        },
        {
            id: 94,
            question: 'After configuring a working router interface with IP address/mask 10.1.1.100/26, which of the following routes would you expect to see in the output of the show ip route command? (Choose two answers.)',
            numberThatCanBeSelected: 2,
            answers: [
                { text: 'A connected route for subnet 10.1.1.64 255.255.255.192', correct: true },
                { text: 'A connected route for subnet 10.1.1.0 255.255.255.0', correct: false },
                { text: 'A local route for host 10.1.1.100 255.255.255.192', correct: false },
                { text: 'A local route for host 10.1.1.100 255.255.255.255', correct: true },
                { text: 'A local route for host 10.1.1.64 255.255.255.255', correct: false }
            ]
        },
        {
            id: 95,
            question: 'An engineer configures a static IPv4 route on Router R1. Which of the following pieces of information should not be listed as a parameter in the configuration command that creates this static IPv4 route?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'The destination subnet’s subnet ID', correct: false },
                { text: 'The next-hop router’s IP address', correct: false },
                { text: 'The next-hop router’s neighboring interface', correct: true },
                { text: 'The subnet mask', correct: false }
            ]
        },
        {
            id: 96,
            question: 'Which of the following commands correctly configures a static route?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'ip route 101.3.0 255.255.255.0 10.1.130.253', correct: true },
                { text: 'ip route 101.3.0 serial 0', correct: false },
                { text: 'ip route 101.3.0 /24 10.1.130.253', correct: false },
                { text: 'ip route 101.3.0 /24 serial 0', correct: false }
            ]
        },
        {
            id: 97,
            question: 'A network engineer configures the ip route 10.1.1.0 255.255.255.0 s0/0/0 command on a router and then issues a show ip route command from enable mode. No routes for subnet 10.1.1.0/24 appear in the output. Which of the following could be true?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'The ip route command has incorrect syntax and was rejected in config mode', correct: false },
                { text: 'Interface s0/0/0 is down.', correct: true },
                { text: 'The router has no up/up interfaces in Class A network 10.0.0.0.', correct: false },
                { text: 'The ip route command is missing a next-hop router IP address.', correct: false }
            ]
        },
        {
            id: 98,
            question: 'A router lists the following partial output from the show ip route command. Out which interface will the router route packets destined to IP address 10.1.15.122?',
            image: image98,
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'G0/0/0', correct: false },
                { text: 'G0/1/0', correct: false },
                { text: 'G0/2/0', correct: false },
                { text: 'G0/3/0', correct: true }
            ]
        },
        {
            id: 99,
            question: 'Router 1 has a Fast Ethernet interface 0/0 with IP address 10.1.1.1. The interface is connected to a switch. This connection is then migrated to use 802.1Q trunking. Which of the following commands could be part of a valid configuration for Router 1’s Fa0/0 interface? (Choose two answers.)',
            numberThatCanBeSelected: 2,
            answers: [
                { text: 'interface fastethernet 0/0.4', correct: true },
                { text: 'dot1q enable', correct: false },
                { text: 'dot1q enable 4', correct: false },
                { text: 'trunking enable', correct: false },
                { text: 'trunking enable 4', correct: false },
                { text: 'encapsulation dot1q 4', correct: true }
            ]
        },
        {
            id: 100,
            question: 'Router R1 has a router-on-a-stick (ROAS) configuration with two subinterfaces of interface G0/1: G0/1.1 and G0/1.2. Physical interface G0/1 is currently in a down/down state. The network engineer then configures a shutdown command when in interface configuration mode for G0/1.1 and a no shutdown command when in interface configuration mode for G0/1.2. Which answers are correct about the interface state for the subinterfaces? (Choose two answers.)',
            numberThatCanBeSelected: 2,
            answers: [
                { text: 'G0/1.1 will be in a down/down state.', correct: false },
                { text: 'G0/1.2 will be in a down/down state.', correct: true },
                { text: 'G0/1.1 will be in an administratively down state.', correct: true },
                { text: 'G0/1.2 will be in a up/up state.', correct: false }
            ]
        },
        {
            id: 101,
            question: ' A Layer 3 switch has been configured to route IP packets between VLANs 1, 2, and 3 using SVIs, which connect to subnets 172.20.1.0/25, 172.20.2.0/25, and 172.20.3.0/25, respectively. The engineer issues a show ip route connected command on the Layer 3 switch, listing the connected routes. Which of the following answers lists a piece of information that should be in at least one of the routes?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'Interface Gigabit Ethernet 0/0.3', correct: false },
                { text: 'Next-hop router 172.20.2.1', correct: false },
                { text: 'Interface VLAN 2', correct: true },
                { text: 'Mask 255.255.255.0', correct: false }
            ]
        },
        {
            id: 102,
            question: 'An engineer has successfully configured a Layer 3 switch with SVIs for VLANs 2 and 3. Hosts in the subnets using VLANs 2 and 3 can ping each other with the Layer 3 switch routing the packets. The next week, the network engineer receives a call that those same users can no longer ping each other. If the problem is with the Layer 3 switching function, which of the following could have caused the problem? (Choose two answers.)',
            numberThatCanBeSelected: 2,
            answers: [
                { text: 'Six (or more) out of 10 working VLAN 2 access ports failing due to physical problems', correct: false },
                { text: 'A shutdown command issued from interface VLAN 4 configuration mode', correct: false },
                { text: 'VTP on the switch removing VLAN 3 from the switch’s VLAN list', correct: true },
                { text: 'A shutdown command issued from VLAN 2 configuration mode', correct: true }
            ]
        },
        {
            id: 103,
            question: 'A LAN design uses a Layer 3 EtherChannel between two switches SW1 and SW2, with port-channel interface 1 used on both switches. SW1 uses ports G0/1, G0/2, and G0/3 in the channel. Which of the following are true about SW1’s configuration to make the channel be able to route IPv4 packets correctly? (Choose two answers.)',
            numberThatCanBeSelected: 2,
            answers: [
                { text: 'The ip address command must be on the port-channel 1 interface.', correct: true },
                { text: 'The ip address command must be on interface G0/1 (lowest numbered port).', correct: false },
                { text: 'The port-channel 1 interface must be configured with the no switchport command.', correct: true },
                { text: 'Interface G0/1 must be configured with the routedport command.', correct: false }
            ]
        },
        {
            id: 104,
            question: 'A LAN design uses a Layer 3 EtherChannel between two switches SW1 and SW2, with port-channel interface 1 used on both switches. SW1 uses ports G0/1 and G0/2 in the channel. However, only interface G0/1 is bundled into the channel and working. Think about the configuration settings on port G0/2 that could have existed before adding G0/2 to the EtherChannel. Which answers identify a setting that could prevent IOS from adding G0/2 to the Layer 3 EtherChannel? (Choose two answers.)',
            numberThatCanBeSelected: 2,
            answers: [
                { text: 'A different STP cost (spanning-tree cost value)', correct: false },
                { text: 'A different speed (speed value)', correct: true },
                { text: 'A default setting for switchport (switchport)', correct: true },
                { text: 'A different access VLAN (switchport access vlan vlan-id)', correct: false }
            ]
        },
        {
            id: 105,
            question: 'Which of the following routing protocols is considered to use link-state logic?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'RIPv1', correct: false },
                { text: 'RIPv2', correct: false },
                { text: 'EIGRP', correct: false },
                { text: 'OSPF', correct: true }
            ]
        },
        {
            id: 106,
            question: 'Which of the following routing protocols use a metric that is, by default, at least partially affected by link bandwidth? (Choose two answers.)',
            numberThatCanBeSelected: 2,
            answers: [
                { text: 'RIPv1', correct: false },
                { text: 'RIPv2', correct: false },
                { text: 'EIGRP', correct: true },
                { text: 'OSPF', correct: true }
            ]
        },
        {
            id: 107,
            question: 'Two routers using OSPFv2 have become neighbors and exchanged all LSAs. As a result, Router R1 now lists some OSPF-learned routes in its routing table. Which of the following best describes how R1 uses those recently learned LSAs to choose which IP routes to add to its IP routing table?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'Each LSA lists a route to be copied to the routing table.', correct: false },
                { text: 'Some LSAs list a route that can be copied to the routing table.', correct: false },
                { text: 'Run some SPF math against the LSAs to calculate the routes.', correct: true },
                { text: 'R1 does not use the LSAs at all when choosing what routes to add.', correct: false }
            ]
        },
        {
            id: 108,
            question: 'Which of the following OSPF neighbor states is expected when the exchange of topology information is complete between two OSPF neighbors?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: '2-way', correct: false },
                { text: 'Full', correct: true },
                { text: 'Up/up', correct: false },
                { text: 'Final', correct: false }
            ]
        },
        {
            id: 109,
            question: 'A company has a small/medium-sized network with 15 routers and 40 subnets and uses OSPFv2. Which of the following is considered an advantage of using a single-area design as opposed to a multiarea design?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'It reduces the processing overhead on most routers.', correct: false },
                { text: 'Status changes to one link may not require SPF to run on all other routers.', correct: false },
                { text: 'It allows for simpler planning and operations.', correct: true },
                { text: 'It allows for route summarization, reducing the size of IP routing tables.', correct: false }
            ]
        },
        {
            id: 110,
            question: 'Which of the following network commands, following the command router ospf 1, tells this router to start using OSPF on interfaces whose IP addresses are 10.1.1.1, 10.1.100.1, and 10.1.120.1?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'network 10.0.0.0 255.0.0.0 area 0', correct: false },
                { text: 'network 10.0.0.0 0.255.255.255 area 0', correct: true },
                { text: 'network 10.0.0.1 0.0.0.255 area 0', correct: false },
                { text: 'network 10.0.0.1 0.0.255.255 area 0', correct: false }
            ]
        },
        {
            id: 111,
            question: 'Which of the following network commands, following the command router ospf 1, tells this router to start using OSPF on interfaces whose IP addresses are 10.1.1.1, 10.1.100.1, and 10.1.120.1?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'network 10.1.0.0 0.0.255.255 area 0', correct: true },
                { text: 'network 10.0.0.0 0.255.255.0 area 0', correct: false },
                { text: 'network 10.1.1.0 0.x.1x.0 area 0', correct: false },
                { text: 'network 10.1.1.0 255.0.0.0 area 0', correct: false },
                { text: 'network 10.0.0.0 255.0.0.0 area 0', correct: false }
            ]
        },
        {
            id: 112,
            question: 'Which of the following commands list the OSPF neighbors off interface serial 0/0? (Choose two answers.)',
            numberThatCanBeSelected: 2,
            answers: [
                { text: 'show ip ospf neighbor', correct: true },
                { text: 'show ip ospf interface brief', correct: false },
                { text: 'show ip neighbor', correct: false },
                { text: 'show ip interface', correct: false },
                { text: 'show ip ospf neighbor serial 0/0', correct: true }
            ]
        },
        {
            id: 113,
            question: 'An engineer migrates from a more traditional OSPFv2 configuration that uses network commands in OSPF configuration mode to instead use OSPFv2 interface configuration. Which of the following commands configures the area number assigned to an interface in this new configuration?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'The area command in interface configuration mode', correct: false },
                { text: 'The ip ospf command in interface configuration mode', correct: true },
                { text: 'The router ospf command in interface configuration mode', correct: false },
                { text: 'The network command in interface configuration mode', correct: false }
            ]
        },
        {
            id: 114,
            question: 'Which of the following configuration settings on a router does not influence which IPv4 route a router chooses to add to its IPv4 routing table when using OSPFv2?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'auto-cost reference-bandwidth', correct: false },
                { text: 'delay', correct: true },
                { text: 'bandwidth', correct: false },
                { text: 'ip ospf cost', correct: false }
            ]
        },
        {
            id: 115,
            question: 'SPF interface configuration uses the ip ospf process-id area area-number configuration command. In which modes do you configure the following settings when using this command?',
            numberThatCanBeSelected: 2,
            answers: [
                { text: 'The router ID is configured explicitly in router mode.', correct: true },
                { text: 'The router ID is configured explicitly in interface mode.', correct: false },
                { text: "An interface's area number is configured in router mode.", correct: false },
                { text: "An interface's area number is configured in interface mode.", correct: true }
            ]
        },
        {
            id: 116,
            question: 'Routers R1 and R2, with router IDs 1.1.1.1 and 2.2.2.2, connect over an Ethernet WAN link. If using all default OSPF settings, if the WAN link initializes for both routers at the same time, which of the following answers are true? (Choose two answers.)',
            numberThatCanBeSelected: 2,
            answers: [
                { text: 'Router R1 will become the DR.', correct: false },
                { text: 'Router R1 will dynamically discover the existence of router R2', correct: true },
                { text: "Router R2 will be neither the DR nor the BDR.", correct: false },
                { text: "Router R1’s show ip ospf neighbor command will list R2 with a state of “FULL/DR.”", correct: true }
            ]
        },
        {
            id: 117,
            question: 'Routers R1 and R2, with router IDs 1.1.1.1 and 2.2.2.2, connect over an Ethernet WAN link. The configuration uses all defaults, except giving R1 an interface priority of 11 and changing both routers to use OSPF network type point-to-point. If the WAN link initializes for both routers at the same time, which of the following answers are true? (Choose two answers.)',
            numberThatCanBeSelected: 2,
            answers: [
                { text: 'Router R1 will become the DR.', correct: false },
                { text: 'Router R1 will dynamically discover the existence of router R2', correct: true },
                { text: "Router R2 will be niether the DR nor BDR", correct: true },
                { text: 'Router R2’s show ip ospf neighbor command will list R1 with a state of “FULL/DR.”', correct: false }
            ]
        },
        {
            id: 118,
            question: 'Routers R1 and R2, with router IDs 1.1.1.1 and 2.2.2.2, connect over an Ethernet WAN link. The configuration uses all defaults, except giving R1 an interface priority of 11 and changing both routers to use OSPF network type point-to-point. If the WAN link initializes for both routers at the same time, which of the following answers are true? (Choose two answers.)',
            numberThatCanBeSelected: 2,
            answers: [
                { text: 'Router R1 will become the DR.', correct: false },
                { text: 'Router R1 will dynamically discover the existence of router R2', correct: true },
                { text: "Router R2 will be niether the DR nor BDR", correct: true },
                { text: 'Router R2’s show ip ospf neighbor command will list R1 with a state of “FULL/DR.”', correct: false }
            ]
        },
        {
            id: 119,
            question: 'Per the command output, with how many routers is router R9 full adjacent over its Gi0/0 interface?',
            image: image119,
            numberThatCanBeSelected: 1,
            answers: [
                { text: '7', correct: false },
                { text: '0', correct: false },
                { text: '5', correct: false },
                { text: '2', correct: true }
            ]
        },
        {
            id: 120,
            question: 'An engineer connects routers R11 and R12 to the same Ethernet LAN and configures them to use OSPFv2. Which answers describe a combination of settings that would prevent the two routers from becoming OSPF neighbors? (Choose two answers.)',
            numberThatCanBeSelected: 2,
            answers: [
                { text: 'R11’s interface uses area 11 while R12’s interface uses area 12.', correct: true },
                { text: 'R11’s OSPF process uses process ID 11 while R12 uses process ID 12.', correct: false },
                { text: 'R11’s interface uses OSPF priority 11 while R12’s uses OSPF priority 12.', correct: false },
                { text: ' R11’s interface uses an OSPF Hello timer value of 11 while R12’s uses 12. ', correct: true }
            ]
        },
        {
            id: 121, 
            question: 'An engineer connects routers R13 and R14 to the same Ethernet LAN and configures them to use OSPFv2. Which answers describe a combination of settings that would prevent the two routers from becoming OSPF neighbors?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'Both routers’ interface IP addresses reside in the same subnet.', correct: false },
                { text: 'Both routers’ OSPF process uses process ID 13.', correct: false },
                { text: 'Both routers’ OSPF process uses router ID 13.13.13.13.', correct: true },
                { text: 'Both routers’ interfaces use an OSPF Dead interval of 40', correct: false }
            ]
        },
        {
            id: 122, 
            question: 'Router R15 has been a working part of a network that uses OSPFv2. An engineer then issues the shutdown command in OSPF configuration mode on R15. Which of the following occurs?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'R15 empties its IP routing table of all OSPF routes but keeps its LSDB intact.', correct: false },
                { text: 'R15 empties its LSDB but keeps OSPF neighbor relationships active.', correct: false },
                { text: 'R15 keeps OSPF neighbors open but does not accept new OSPF neighbors.', correct: false },
                { text: 'R15 keeps all OSPF configuration but ceases all OSPF activities (routes, LSDB, neighbors).', correct: true }
            ]
        },
        {
            id: 123, 
            question: 'Which of the following was a short-term solution to the IPv4 address exhaustion problem?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'IP version 6', correct: false },
                { text: 'IP version 5', correct: false },
                { text: 'NAT/PAT', correct: true },
                { text: 'ARP', correct: false }
            ]
        },
        {
            id: 124, 
            question: 'A router receives an Ethernet frame that holds an IPv6 packet. The router then makes a decision to route the packet out a serial link. Which of the following statements is true about how a router forwards an IPv6 packet?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'The router discards the Ethernet data-link header and trailer of the received frame.', correct: true },
                { text: 'The router makes the forwarding decision based on the packet’s source IPv6 address.', correct: false },
                { text: 'The router keeps the Ethernet header, encapsulating the entire frame inside a new IPv6 packet before sending it over the serial link.', correct: false },
                { text: 'The router uses the IPv4 routing table when choosing where to forward the packet.', correct: false }
            ]
        },
        {
            id: 125, 
            question: 'Which of the following is the shortest valid abbreviation for FE80:0000:0000:0100:0000:0000:0000:0123?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'FE80::100::123', correct: false },
                { text: 'FE8::1::123', correct: false },
                { text: 'FE80::100:0:0:0:123:4567', correct: false },
                { text: 'FE80:0:0:100::123', correct: true }
            ]
        },
        {
            id: 126, 
            question: 'Which of the following is the shortest valid abbreviation for 2000:0300:0040:0005:6000:0700:0080:0009?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: '2:3:4:5:6:7:8:9', correct: false },
                { text: '2000:300:40:5:6000:700:80:9', correct: true },
                { text: '2000:300:4:5:6000:700:8:9', correct: false },
                { text: '2000:3:4:5:6:7:8:9', correct: false }
            ]
        },
        {
            id: 127, 
            question: 'Which of the following is the unabbreviated version of IPv6 address 2001:DB8::200:28?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: '2001:0DB8:0000:0000:0000:0000:0200:0028', correct: true },
                { text: '2001:0DB8::0200:0028', correct: false },
                { text: '2001:0DB8:0:0:0:0:0200:0028', correct: false },
                { text: '2001:0DB8:0000:0000:0000:0000:200:0028', correct: false }
            ]
        },
        {
            id: 128,
            question: 'Which of the following is the prefix for address 2000:0000:0000:0005:6000:0700:0080:0009, assuming a mask of /64?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: '2000::5::/64', correct: false },
                { text: '2000::5:0:0:0:0/64', correct: false },
                { text: '2000:0:0:5::/64', correct: true },
                { text: '2000:0:0:5:0:0:0:0/64', correct: false }
            ]
        },
        {
            id: 129,
            question: 'Which of the following IPv6 addresses appears to be a unique local unicast address, based on its first few hex digits?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: '3123:1:3:5::1', correct: false },
                { text: 'FE80::1234:56FF:FE78:9ABC', correct: false },
                { text: 'FDAD::1', correct: true },
                { text: 'FF00::5', correct: false }
            ]
        },
        {
            id: 130,
            question: 'Which of the following IPv6 addresses appears to be a global unicast address, based on its first few hex digits?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: '3123:1:3:5::1', correct: true },
                { text: 'FE80::1234:56FF:FE78:9ABC', correct: false },
                { text: 'FDAD::1', correct: false },
                { text: 'FF00::5', correct: false }
            ]
        },
        {
            id: 131,
            question: 'When subnetting an IPv6 address block, an engineer shows a drawing that breaks the address structure into three pieces. Comparing this concept to a three-part IPv4 address structure, which part of the IPv6 address structure is most like the IPv4 network part of the address?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'Subnet', correct: false },
                { text: 'Interface ID', correct: false },
                { text: 'Network', correct: false },
                { text: 'Global routing prefix', correct: true },
                { text: 'Subnet router anycast', correct: false }
            ]
        },
        {
            id: 132,
            question: 'When subnetting an IPv6 address block, an engineer shows a drawing that breaks the address structure into three pieces. Assuming that all subnets use the same prefix length, which of the following answers lists the name of the field on the far right side of the address?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'Subnet', correct: false },
                { text: 'Interface ID', correct: true },
                { text: 'Network', correct: false },
                { text: 'Global routing prefix', correct: false },
                { text: 'Subnet router anycast', correct: false }
            ]
        },
        {
            id: 133,
            question: 'For the IPv6 address FD00:1234:5678:9ABC:DEF1:2345:6789:ABCD, which part of the address is considered the global ID of the unique local address?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'None; this address has no global ID.', correct: false },
                { text: '00:1234:5678:9ABC', correct: false },
                { text: 'DEF1:2345:6789:ABCD', correct: false },
                { text: '00:1234:5678', correct: true },
                { text: 'FD00', correct: false }
            ]
        },
        {
            id: 134,
            question: 'Router R1 has an interface named Gigabit Ethernet 0/1, whose MAC address has been set to 0200.0001.000A. Which of the following commands, added in R1’s Gigabit Ethernet 0/1 configuration mode, gives this router’s G0/1 interface a unicast IPv6 address of 2001:1:1:1:1:200:1:A, with a /64 prefix length?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'ipv6 address 2001:1:1:1:1:200:1:A/64', correct: true },
                { text: 'ipv6 address 2001:1:1:1:1:200:1:A/64 eui-64', correct: false },
                { text: 'ipv6 address 2001:1:1:1:1:200:1:A /64 eui-64', correct: false },
                { text: 'ipv6 address 2001:1:1:1:1:200:1:A /64', correct: false },
                { text: 'None of the other answers are correct.', correct: false }
            ]
        },
        {
            id: 135,
            question: 'Router R1 has an interface named Gigabit Ethernet 0/1, whose MAC address has been set to 5055.4444.3333. This interface has been configured with the ipv6 address 2000:1:1:1::/64 eui-64 subcommand. What unicast address will this interface use?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: '2000:1:1:1:52FF:FE55:4444:3333', correct: false },
                { text: '2000:1:1:1:5255:44FF:FE44:3333', correct: true },
                { text: '2000:1:1:1:5255:4444:33FF:FE33', correct: false },
                { text: '2000:1:1:1:200:FF:FE00:0', correct: false }
            ]
        },
        {
            id: 136,
            question: 'Router R1 currently supports IPv4, routing packets in and out all its interfaces. R1’s configuration needs to be migrated to support dual-stack operation, routing both IPv4 and IPv6. Which of the following tasks must be performed before the router can also support routing IPv6 packets? (Choose two answers.)',
            numberThatCanBeSelected: 2,
            answers: [
                { text: 'Enable IPv6 on each interface using an ipv6 address interface subcommand.', correct: true },
                { text: 'Enable support for both versions with the ip versions 4 6 global command.', correct: false },
                { text: 'Additionally enable IPv6 routing using the ipv6 unicast-routing global command.', correct: true },
                { text: 'Migrate to dual-stack routing using the ip routing dual-stack global command.', correct: false }
            ]
        },
        {
            id: 137,
            question: 'Which of the following multicast addresses is defined as the address for sending packets to only the IPv6 routers on the local link?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'FF02::1', correct: false },
                { text: 'FF02::2', correct: true },
                { text: 'FF02::5', correct: false },
                { text: 'FF02::A', correct: false }
            ]
        },
        {
            id: 138,
            question: ' A router has been configured with the ipv6 address 2000:1:2:3::1/64 command on its G0/1 interface as shown in the figure. The router creates a link-local address of FE80::FF:FE00:1 as well. The interface is working. Which of the following routes will the router add to its IPv6 routing table? (Choose two answers.)',
            numberThatCanBeSelected: 2,
            answers: [
                { text: 'A route for 2000:1:2:3::/64', correct: true },
                { text: 'A route for FE80::FF:FE00:1/64', correct: false },
                { text: 'A route for 2000:1:2:3::1/128', correct: true },
                { text: 'A route for FE80::FF:FE00:1/128', correct: false }
            ]
        },
        {
            id: 139,
            question: 'A router has been configured with the ipv6 address 3111:1:1:1::1/64 command on its G0/1 interface and ipv6 address 3222:2:2:2::1/64 on its G0/2 interface. Both interfaces are working. Which of the following routes would you expect to see in the output of the show ipv6 route connected command? (Choose two answers.)',
            numberThatCanBeSelected: 2,
            answers: [
                { text: 'A route for 3111:1:1:1::/64', correct: true },
                { text: 'A route for 3111:1:1:1::1/64', correct: false },
                { text: 'A route for 3222:2:2:2::/64', correct: true },
                { text: 'A route for 3222:2:2:2::2/128', correct: false }
            ]
        },
        {
            id: 140,
            question: 'An engineer needs to add a static IPv6 route for prefix 2000:1:2:3::/64 to Router R5’s configuration, in the figure shown with question 1. Which of the following answers shows a valid static IPv6 route for that subnet, on Router R5?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'ipv6 route 2000:1:2:3::/64 S0/1/1', correct: true },
                { text: 'ipv6 route 2000:1:2:3::/64 S0/1/0', correct: false },
                { text: 'ip route 2000:1:2:3::/64 S0/1/1', correct: false },
                { text: 'ip route 2000:1:2:3::/64 S0/1/0', correct: false }
            ]
        },
        {
            id: 141,
            question: 'An engineer needs to add a static IPv6 route for prefix 2000:1:2:3::/64 to Router R5 in the figure shown with question 1. Which of the following answers shows a valid static IPv6 route for that subnet on Router R5?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'ipv6 route 2000:1:2:3::/64 2000:1:2:56::5', correct: false },
                { text: 'ipv6 route 2000:1:2:3::/64 2000:1:2:56::6', correct: true },
                { text: 'ipv6 route 2000:1:2:3::/64 FE80::FF:FE00:5', correct: false },
                { text: 'ipv6 route 2000:1:2:3::/64 FE80::FF:FE00:6', correct: false }
            ]
        },
        {
            id: 142,
            question: 'A router has been configured with the ipv6 address 2000:1:2:3::1/64 command on its G0/1 interface as shown in the figure. The router creates a link-local address of FE80::FF:FE00:1 as well. The interface is working. Which of the following routes will the router add to its IPv6 routing table? (Choose two answers.',
            numberThatCanBeSelected: 2,
            answers: [
                { text: 'A route for 2000:1:2:3::/64', correct: true },
                { text: 'A route for FE80::FF:FE00:1/64', correct: false },
                { text: 'A route for 2000:1:2:3::1/128', correct: true },
                { text: 'A route for FE80::FF:FE00:1/128', correct: false }
            ]
        },
        {
            id: 143,
            question: 'A router has been configured with the ipv6 address 3111:1:1:1::1/64 command on its G0/1 interface and ipv6 address 3222:2:2:2::1/64 on its G0/2 interface. Both interfaces are working. Which of the following routes would you expect to see in the output of the show ipv6 route connected command? (Choose two answers.)',
            numberThatCanBeSelected: 2,
            answers: [
                { text: 'A route for 3111:1:1:1::/64', correct: true },
                { text: 'A route for 3111:1:1:1::1/64', correct: false },
                { text: 'A route for 3222:2:2:2::/64', correct: true },
                { text: 'A route for 3222:2:2:2::2/128', correct: false }
            ]
        },
        {
            id: 144,
            question: 'An engineer needs to add a static IPv6 route for prefix 2000:1:2:3::/64 to Router R5’s configuration, in the figure shown with question 1. Which of the following answers shows a valid static IPv6 route for that subnet, on Router R5?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'ipv6 route 2000:1:2:3::/64 S0/1/1', correct: true },
                { text: 'ipv6 route 2000:1:2:3::/64 S0/1/0', correct: false },
                { text: 'ip route 2000:1:2:3::/64 S0/1/1', correct: false },
                { text: 'ip route 2000:1:2:3::/64 S0/1/0', correct: false }
            ]
        },
        {
            id: 145,
            question: 'An engineer needs to add a static IPv6 route for prefix 2000:1:2:3::/64 to Router R5 in the figure shown with question 1. Which of the following answers shows a valid static IPv6 route for that subnet on Router R5?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'ipv6 route 2000:1:2:3::/64 2000:1:2:56::5', correct: false },
                { text: 'ipv6 route 2000:1:2:3::/64 2000:1:2:56::6', correct: true },
                { text: 'ipv6 route 2000:1:2:3::/64 FE80::FF:FE00:5', correct: false },
                { text: 'ipv6 route 2000:1:2:3::/64 FE80::FF:FE00:6', correct: false }
            ]
        },
        {
            id: 146,
            question: 'An engineer types the command ipv6 route 2001:DB8:8:8::/64 2001:DB8:9:9::9 129in configuration mode of Router R1 and presses Enter. Later, a show ipv6 route command does not list any route for subnet 2001:DB8:8:8::/64. Which of the following could have caused the route to not be in the IPv6 routing table?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: ' The command should be using a next-hop link-local address instead of a global unicast.', correct: false },
                { text: 'The command is missing an outgoing interface parameter, so IOS rejected the ipv6 route command.', correct: false },
                { text: 'A route for 2001:DB8:8:8::/64 with administrative distance 110 already exists.', correct: true },
                { text: 'ipv6 route 2000:1:2:3::/64 FE80::FF:FE00:6', correct: false }
            ]
        },
        {
            id: 147,
            question: 'The command output shows two routes from the longer output of the show ipv6 route command. Which answers are true about the output? (Choose two answers.)',
            numberThatCanBeSelected: 2,
            image: image147,
            answers: [
                { text: 'The route to ::/0 is added because of an ipv6 route global command.', correct: true },
                { text: 'The administrative distance of the route to 2001:DB8:2:2::/64 is 1.', correct: true },
                { text: 'The route to ::/0 is added because of an ipv6 address interface subcommand.', correct: false },
                { text: 'The route to 2001:DB8:2:2::/64 is added because of an IPv6 routing protocol.', correct: false }
            ]
        },
        {
            id: 148,
            question: 'PC1, PC2, and Router R1 all connect to the same VLAN and IPv6 subnet. PC1 wants to send its first IPv6 packet to PC2. What protocol or message will PC1 use to discover the MAC address to which PC1 should send the Ethernet frame that encapsulates this IPv6 packet?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'ARP', correct: false },
                { text: 'NDP NS', correct: true },
                { text: 'NDP RS', correct: false },
                { text: 'SLAAC', correct: false }
            ]
        },
        {
            id: 149,
            question: 'Which of the following pieces of information does a router supply in an NDP Router Advertisement (RA) message? (Choose two answers.)',
            numberThatCanBeSelected: 2,
            answers: [
                { text: 'Router IPv6 address', correct: true },
                { text: 'Host name of the router', correct: false },
                { text: 'IPv6 prefix(ex) on the link', correct: true },
                { text: 'IPv6 address of DHCP server', correct: false }
            ]
        },
        {
            id: 150,
            question: 'Wired Ethernet and Wi-Fi are based on which two IEEE standards, respectively?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: '802.1, 802.3', correct: false },
                { text: '802.3, 802.1', correct: false },
                { text: '802.3, 802.11', correct: true },
                { text: '802.11, 802.3', correct: false }
            ]
        },
        {
            id: 151,
            question: 'Devices using a wireless LAN must operate in which one of the following modes?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'Round-rabin access', correct: false },
                { text: 'Half duplex', correct: true },
                { text: 'Full duplex', correct: false },
                { text: 'None of these answers', correct: false }
            ]
        },
        {
            id: 152,
            question: 'An access point is set up to offer wireless coverage in an office. Which one of the following is the correct 802.11 term for the resulting standalone network?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'BSA', correct: false },
                { text: 'BSD', correct: false },
                { text: 'BSS', correct: true },
                { text: 'IBSS', correct: false }
            ]
        },
        {
            id: 153,
            question: 'Which one of the following is used to uniquely identify an AP and the basic service set it maintains with its associated wireless clients?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'SSID', correct: false },
                { text: 'BSSID', correct: true },
                { text: 'Ethernet MAC address', correct: false },
                { text: 'Radio MAC address', correct: false }
            ]
        },
        {
            id: 154,
            question: 'Which one of the following can be used to provide wireless connectivity to a nonwireless device?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'Wireless repeater', correct: false },
                { text: 'Workgroup bridge', correct: true },
                { text: 'Transport bridge', correct: false },
                { text: 'Adaptive bridge', correct: false }
            ]
        },
        {
            id: 155,
            question: 'Which one of the following is not needed in a Cisco outdoor mesh network?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'A BSS function', correct: false },
                { text: 'Ethernet cabling to each AP', correct: true },
                { text: 'A workgroup bridge', correct: false },
                { text: 'A backhaul network', correct: false }
            ]
        },
        {
            id: 156,
            question: 'Which of the following are frequency bands commonly used for Wi-Fi?',
            numberThatCanBeSelected: 2,
            answers: [
                { text: '2.5 KHz', correct: false },
                { text: '2.5 MHz', correct: false },
                { text: '5 MHz', correct: false },
                { text: '2.5 GHz', correct: true },
                { text: '5 GHz', correct: true }
            ]
        },
        {
            id: 157,
            question: 'Which of the following are considered to be nonoverlapping channels?',
            numberThatCanBeSelected: 2,
            answers: [
                { text: 'Channels 1, 2, and 3 in the 2.4-GHz band', correct: false },
                { text: 'Channels 1, 5, and 10 in the 2.4-GHz band', correct: false },
                { text: 'Channels 1, 6, and 11 in the 2.4-GHz band', correct: true },
                { text: 'Channels 40, 44, and 48 in the 5-GHz band', correct: true }
            ]
        },
        {
            id: 158,
            question: 'Which one of the following terms best describes a Cisco wireless access point that operates in a standalone, independent manner?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'Autonomous AP', correct: true },
                { text: 'Independent AP', correct: false },
                { text: 'Lightweight AP', correct: false },
                { text: 'Embedded AP', correct: false }
            ]
        },
        {
            id: 159,
            question: 'The Cisco Meraki cloud-based APs are most accurately described by which one of the following statements?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'Autonomous APs joined to a WLC', correct: false },
                { text: 'Autonomous APs centrally managed', correct: true },
                { text: 'Lightweight APs joined to a WLC', correct: false },
                { text: 'Lightweight APs centrally managed', correct: false }
            ]
        },
        {
            id: 160,
            question: 'A lightweight access point is said to participate in which one of the following architectures?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'Light-MAC', correct: false },
                { text: 'Tunnel-MAC', correct: false },
                { text: 'Split-MAC', correct: true },
                { text: 'Big-MAC', correct: false }
            ]
        },
        {
            id: 161,
            question: 'How does a lightweight access point communicate with a wireless LAN controller?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'Through an IPsec tunnel', correct: false },
                { text: 'Through a CAPWAP tunnel', correct: true },
                { text: 'Through a GRE tunnel', correct: false },
                { text: 'Directly over Layer 2', correct: false }
            ]
        },
        {
            id: 162,
            question: ' Which one of the following is not needed for a lightweight AP in default local mode to be able to support three SSIDs that are bound to three VLANs?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'A trunk link carrying three VLANs', correct: true },
                { text: 'An access link bound to a single VLAN', correct: false },
                { text: 'A WLC connected to three VLANs', correct: false },
                { text: 'A CAPWAP tunnel to a WLC', correct: false }
            ]
        },
        {
            id: 163,
            question: 'Which one of the following WLC deployment models would be best for a large enterprise with around 3000 lightweight APs?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'Cisco Mobility Express', correct: false },
                { text: 'Embedded', correct: false },
                { text: 'Unified', correct: true },
                { text: 'Cloud-based', correct: false }
            ]
        },
        {
            id: 164,
            question: 'If a lightweight AP provides at least one BSS for wireless clients, which one of the following modes does it use?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'Local', correct: true },
                { text: 'Normal', correct: false },
                { text: 'Monitor', correct: false },
                { text: 'Client', correct: false }
            ]
        },
        {
            id: 165,
            question: 'Regarding lightweight AP modes, which one of the following is true?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'An AP can operate in multiple modes at the same time.', correct: false },
                { text: 'An AP only has one possible mode of operation.', correct: false },
                { text: 'The Run mode is the default mode.', correct: false },
                { text: 'The SE-Connect mode is used for spectrum analysis.', correct: true }
            ]
        },
        {
            id: 166,
            question: 'Which of the following are necessary components of a secure wireless connection?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'Encryption', correct: false },
                { text: 'MIC', correct: false },
                { text: 'Authentication', correct: false },
                { text: 'All of these answers are correct', correct: true }
            ]
        },
        {
            id: 167,
            question: 'Which one of the following is used to protect the integrity of data in a wireless frame?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'WIPS', correct: false },
                { text: 'WEP', correct: false },
                { text: 'MIC', correct: true },
                { text: 'EAP', correct: false }
            ]
        },
        {
            id: 168,
            question: 'Which one of the following is a wireless encryption method that has been found to be vulnerable and is not recommended for use?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'AES', correct: false },
                { text: 'WPA', correct: false },
                { text: 'EAP', correct: false },
                { text: 'WEP', correct: true }
            ]
        },
        {
            id: 169,
            question: 'Which one of the following is used as the authentication framework when 802.1x is used on a WLAN?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'Open authentication', correct: false },
                { text: 'WEP', correct: false },
                { text: 'EAP', correct: true },
                { text: 'WPA', correct: false }
            ]
        },
        {
            id: 170,
            question: 'Suppose you would like to select a method to protect the privacy and integrity of wireless data. Which one of the following methods should you avoid because it has been deprecated ?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'TKIP', correct: true },
                { text: 'CCMP', correct: false },
                { text: 'GCMP', correct: false },
                { text: 'EAP', correct: false }
            ]
        },
        {
            id: 171,
            question: 'Which one of the following is the data encryption and integrity method used by WPA2?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'WEP', correct: false },
                { text: 'TKIP', correct: false },
                { text: 'CCMP', correct: true },
                { text: 'WPA', correct: false }
            ]
        },
        {
            id: 172,
            question: 'The Wi-Fi Alliance offers which of the following certifications for wireless devices that correctly implement security standards?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'WEP', correct: false },
                { text: 'WPA2', correct: true },
                { text: '802.11', correct: false },
                { text: 'AES', correct: false }
            ]
        },
        {
            id: 173,
            question: 'The Wi-Fi Alliance offers which of the following certifications for wireless devices that correctly implement security standards?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'WEP', correct: false },
                { text: 'WPA2', correct: true },
                { text: '802.11', correct: false },
                { text: 'AES', correct: false }
            ]
        },
        {
            id: 174,
            question: 'A pre-shared key is used in which of the following wireless security configurations?(choose two answers)',
            numberThatCanBeSelected: 2,
            answers: [
                { text: 'WPA2 personal mode', correct: true },
                { text: 'WPA2 enterprise mode', correct: false },
                { text: 'WPA3 personal mode', correct: true },
                { text: 'WPA3 enterprise mode', correct: false }
            ]
        },
        {
            id: 175,
            question: 'Suppose you need to connect a lightweight AP to a network. Which one of the following link types would be necessary?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'Access mode link', correct: true },
                { text: 'Trunk mode link', correct: false },
                { text: 'LAG mode link', correct: false },
                { text: 'EtherChannel link', correct: false }
            ]
        },
        {
            id: 176,
            question: 'An autonomous AP will be configured to support three WLANs that correspond to three VLANs. The AP will connect to the network over which one of the following?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'Access mode link', correct: false },
                { text: 'Trunk mode link', correct: true },
                { text: 'LAG mode link', correct: false },
                { text: 'EtherChannel link', correct: false }
            ]
        },
        {
            id: 177,
            question: 'Suppose you would like to connect to a WLC to configure a new WLAN on it. Which one of the following is a valid method to use?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'SSH', correct: false },
                { text: 'HTTPS', correct: false },
                { text: 'HTTP', correct: false },
                { text: 'All of these answers are correct', correct: true }
            ]
        },
        {
            id: 178,
            question: 'Which one of the following correctly describes the single logical link formed by bundling all of a controller’s distribution system ports together?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'PHY', correct: false },
                { text: 'DSP', correct: false },
                { text: 'LAG', correct: true },
                { text: 'GEC', correct: false }
            ]
        },
        {
            id: 179,
            question: 'Which one of the following controller interfaces maps a WLAN to a VLAN?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'VLAN', correct: false },
                { text: 'AP', correct: false },
                { text: 'Controller interface', correct: false },
                { text: 'SSID', correct: true }
            ]
        },
        {
            id: 180,
            question: 'Which two of the following things are bound together when a new WLAN is created?',
            numberThatCanBeSelected: 2,
            answers: [
                { text: 'VLAN', correct: false },
                { text: 'AP', correct: false },
                { text: 'Controller interface', correct: true },
                { text: 'SSID', correct: true }
            ]
        },
        {
            id: 181,
            question: 'What is the maximum number of WLANs you can configure on a Cisco wireless controller?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: '8', correct: false },
                { text: '16', correct: false },
                { text: '512', correct: true },
                { text: '1024', correct: false }
            ]
        },

        {
            id: 182,
            question: 'Which of the following header fields identify which TCP/IP application gets data received by the computer? (Choose two answers.)',
            numberThatCanBeSelected: 2,
            answers: [
                { text: 'Ethernet Type', correct: false },
                { text: 'SNAP Protocol Type', correct: false },
                { text: 'IP Protocol', correct: false },
                { text: 'TCP Port Number', correct: true },
                { text: 'UDP Port Number', correct: true }
            ]
        },
        {
            id: 183,
            question: 'Which of the following are typical functions of TCP? (Choose four answers.)',
            numberThatCanBeSelected: 4,
            answers: [
                { text: 'Flow control (windowing)', correct: true },
                { text: 'Error recovery', correct: true },
                { text: 'Multiplexing using port numbers', correct: true },
                { text: 'Routing', correct: false },
                { text: 'Encryption', correct: false },
                { text: 'Ordered data transfer', correct: true }
            ]
        },
        {
            id: 184,
            question: 'Which of the following functions is performed by both TCP and UDP?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'Windowing', correct: true },
                { text: 'Error recovery', correct: false },
                { text: 'Multiplexing using port numbers', correct: false },
                { text: 'Routing', correct: false },
                { text: 'Encryption', correct: false },
                { text: 'Ordered data transfer', correct: false }
            ]
        },
        {
            id: 185,
            question: 'What do you call data that includes the Layer 4 protocol header, and data given to Layer 4 by the upper layers, not including any headers and trailers from Layers 1 to3? (Choose two answers.)',
            numberThatCanBeSelected: 2,
            answers: [
                { text: 'L3PDU', correct: true },
                { text: 'Chunck', correct: true },
                { text: 'Segment', correct: false },
                { text: 'Packet', correct: false },
                { text: 'Frame', correct: false },
                { text: 'L4PDU', correct: false }
            ]
        },
        {
            id: 186,
            question: 'In the URI http://blog.certskills.com/config-labs, which part identifies the web server?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'http', correct: false },
                { text: 'blog.certskills.com', correct: true },
                { text: 'certskills.com', correct: false },
                { text: 'http://blog.certskills.com', correct: false },
                { text: 'The file name.html includes the hostname.', correct: false }
            ]
        },
        {
            id: 187,
            question: 'Fred opens a web browser and connects to the www.certskills.com website. Which ofthe following are typically true about what happens between Fred’s web browser andthe web server? (Choose two answers.)',
            numberThatCanBeSelected: 2,
            answers: [
                { text: 'Messages flowing toward the server use UDP destination port 80.', correct: false },
                { text: 'Messages flowing from the server typically use RTP.', correct: false },
                { text: 'Messages flowing to the client typically use a source TCP port number of 80.', correct: true },
                { text: 'Messages flowing to the server typically use TCP.', correct: true }
            ]
        },
        {
            id: 188,
            question: 'Barney is a host with IP address 10.1.1.1 in subnet 10.1.1.0/24. Which of the following are things that a standard IP ACL could be configured to do? (Choose two answers.)',
            numberThatCanBeSelected: 2,
            answers: [
                { text: 'Match the exact source IP address.', correct: true },
                { text: 'Match IP addresses 10.1.1.1 through 10.1.1.4 with one access-list command without matching other IP addresses.', correct: false },
                { text: 'Match all IP addresses in Barney’s subnet with one access-list command without matching other IP addresses.', correct: true },
                { text: 'Match only the packet’s destination IP address.', correct: false }
            ]
        },
        {
            id: 189,
            question: 'Which of the following answers list a valid number that can be used with standard numbered IP ACLs? (Choose two answers.)',
            numberThatCanBeSelected: 2,
            answers: [
                { text: '1987', correct: true },
                { text: '2187', correct: false },
                { text: '187', correct: false },
                { text: '87', correct: true }
            ]
        },
        {
            id: 190,
            question: 'Which of the following wildcard masks is most useful for matching all IP packets in subnet 10.1.128.0, mask 255.255.255.0?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: '0.0.0.0', correct: false },
                { text: '0.0.0.31', correct: false },
                { text: '0.0.0.240', correct: false },
                { text: '0.0.0.255', correct: true },
                { text: '0.0.15.0', correct: false },
                { text: '0.0.248.255', correct: false },
            ]
        },
        {
            id: 191,
            question: 'Which of the following wildcard masks is most useful for matching all IP packets in subnet 10.1.128.0, mask 255.255.240.0?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: '0.0.0.0', correct: false },
                { text: '0.0.0.31', correct: false },
                { text: '0.0.0.240', correct: false },
                { text: '0.0.0.255', correct: false },
                { text: '0.0.15.255', correct: true },
                { text: '0.0.248.255', correct: false },
            ]
        },
        {
            id: 192,
            question: 'ACL 1 has three statements, in the following order, with address and wildcard mask values as follows: 1.0.0.0 0.255.255.255, 1.1.0.0 0.0.255.255, and 1.1.1.0 0.0.0.255. If a router tried to match a packet sourced from IP address 1.1.1.1 using this ACL, which ACL statement does a router consider the packet to have matched?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'First', correct: true },
                { text: 'Second', correct: false },
                { text: 'Third', correct: false },
                { text: 'Implied deny at the end of the ACL', correct : false }
            ]
        },
        {
            id: 193,
            question: 'Which of the following access-list commands matches all packets sent from hosts in subnet 172.16.4.0/23?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'access-list 1 permit 172.16.0.5 0.0.255.0', correct: true },
                { text: 'access-list 1 permit 172.16.4.0 0.0.1.255', correct: false },
                { text: 'access-list 1 permit 172.16.5.0', correct: false },
                { text: 'access-list 1 permit 172.16.5.0 0.0.0.127', correct : false }
            ]
        },
        {
            id: 194,
            question: 'Which of the following fields cannot be compared based on an extended IP ACL? (Choose two answers.)',
            numberThatCanBeSelected: 2,
            answers: [
                { text: 'Protocol', correct: false },
                { text: 'Source IP address', correct: false },
                { text: 'Dectination IP address', correct: false },
                { text: 'TOS byte', correct : false },
                { text: 'URL', correct : true },
                { text: 'Filename for FTP transfers', correct : true }
            ]
        },
        {
            id: 195,
            question: 'Which of the following access-list commands permit packets going from host 10.1.1.1 to all web servers whose IP addresses begin with 172.16.5? (Choose two answers.)',
            numberThatCanBeSelected: 2,
            answers: [
                { text: 'access-list 101 permit tcp host 10.1.1.1 172.16.5.0 0.0.0.255 eq www', correct: true },
                { text: 'access-list 1951 permit ip host 10.1.1.1 172.16.5.0 0.0.0.255 eq www', correct: false },
                { text: 'access-list 2523 permit ip host 10.1.1.1 eq www 172.16.5.0 0.0.0.255', correct: false },
                { text: 'access-list 2523 permit tcp host 10.1.1.1 eq www 172.16.5.0 0.0.0.255', correct : false },
                { text: 'access-list 2523 permit tcp host 10.1.1.1 172.16.5.0 0.0.0.255 eq www', correct : true }
            ]
        },
        {
            id: 196,
            question: 'Which of the following access-list commands permits packets going to any web client from all web servers whose IP addresses begin with 172.16.5?',
            numberThatCanBeSelected: 1,
            answers: [
                { text: 'access-list 101 permit tcp host 10.1.1.1 172.16.5.0 0.0.0.255 eq www', correct: false },
                { text: 'access-list 1951 permit ip host 10.1.1.1 172.16.5.0 0.0.0.255 eq www', correct: false },
                { text: 'access-list 2523 permit tcp any eq www 172.16.5.0 0.0.0.255', correct: false },
                { text: 'access-list 2523 permit tcp 172.16.5.0 0.0.0.255 eq www 172.16.5.0 0.0.0.255', correct : false },
                { text: 'access-list 2523 permit tcp 172.16.5.0 0.0.0.255 eq www any', correct : true }
            ]
        },
        {
            id: 197,
            question: 'In a router running a recent IOS version (at least version 15.0), an engineer needs to delete the second line in ACL 101, which currently has four commands configured. Which of the following options could be used? (Choose two answers.)',
            numberThatCanBeSelected: 2,
            answers: [
                { text: 'Delete the entire ACL and reconfigure the three ACL statements that should remain in the ACL.', correct: true },
                { text: 'Delete one line from the ACL using the no access-list… global command.', correct: false },
                { text: 'Delete one line from the ACL by entering ACL configuration mode for the ACL and then deleting only the second line based on its sequence number.', correct: true },
                { text: 'Delete the last three lines from the ACL from global configuration mode, and then add the last two statements back into the ACL.', correct : false }
            ]
        },
        {
            id: 198,
            question: 'Refer to the following command output, which details an ACL enabled on port G0/0 for the inbound direction. Which answers list a configuration mode and command that would result in the deletion of the line that matches subnet 172.16.1.0/24?(Choose two answers.)',
            numberThatCanBeSelected: 2,
            image: image198,
            answers: [
                { text: 'In global config mode: no 10', correct: false },
                { text: 'In interface G0/0 config mode: no 10', correct: false },
                { text: 'In ACL dikta-list config mode: no 10', correct: true },
                { text: 'In ACL dikta-list config mode: no permit 172.16.1.0 0.0.0.255', correct : true },
                { text: 'In global config mode: no permit 172.16.1.0 0.0.0.255', correct : false }
            ]
        },
        {
            id: 199,
            question: 'An engineer configures an ACL but forgets to save the configuration. At that point,which of the following commands display the configuration of an IPv4 ACL, including line numbers? (Choose two answers.)',
            numberThatCanBeSelected: 2,
            answers: [
                { text: 'show running-config', correct: false },
                { text: 'show startup-config', correct: false },
                { text: 'show ip access-lists', correct: true },
                { text: 'show access-lists', correct : true }
            ]
        },
        {
            id: 200,
            question: 'Which of the following parameters are necessary when creating a new WLAN with the controller GUI? (Choose all that apply.)',
            numberThatCanBeSelected: 2,
            answers: [
                { text: 'SSID', correct: true },
                { text: 'VLAN number', correct: false },
                { text: 'Interface', correct: true },
                { text: 'BSSID', correct: false },
                { text: 'IP subnet', correct: false }
            ]
        },
    ]
}