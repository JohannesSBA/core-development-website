import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, Users, Target, Globe, ArrowRight, CheckCircle, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

interface Node {
  id: number;
  x: number;
  y: number;
  radius: number;
  clusterId: number;
}

interface Connection {
  from: Node;
  to: Node;
  distance: number;
  clusterId: number;
}

export default function HomePage() {

    // Generate clusters of nodes
  const generateNodes = (): Node[] => {
    const nodes: Node[] = [];
    const numClusters = 120; // 120 clusters
    
    for (let clusterId = 0; clusterId < numClusters; clusterId++) {
      // Create a center point for each cluster - ensure it fits within viewport
      const clusterCenterX = Math.random() * 70 + 15; // 15% to 85% of viewport
      const clusterCenterY = Math.random() * 70 + 15;
      const clusterRadius = Math.random() * 3 + 2; // Smaller cluster spread radius to ensure nodes stay in viewport
      
      // Generate 3-6 nodes for this cluster (randomized)
      const nodesInCluster = Math.floor(Math.random() * 4) + 3; // 3-6 nodes
      for (let nodeInCluster = 0; nodeInCluster < nodesInCluster; nodeInCluster++) {
        const angle = (nodeInCluster * (360 / nodesInCluster)) + (Math.random() * 30 - 15); // Evenly distributed with less randomness
        const distance = Math.random() * clusterRadius + 0.5;
        
        nodes.push({
          id: clusterId * 6 + nodeInCluster,
          x: clusterCenterX + Math.cos(angle * Math.PI / 180) * distance,
          y: clusterCenterY + Math.sin(angle * Math.PI / 180) * distance,
          radius: Math.random() * 0.4 + 0.15, // Radius between 0.15-0.55 (more variation)
          clusterId: clusterId,
        });
      }
    }
    
    return nodes;
  };

  // Generate connections within each cluster
  const generateConnections = (nodes: Node[]): Connection[] => {
    const connections: Connection[] = [];
    
    // Group nodes by cluster
    const clusters = new Map<number, Node[]>();
    nodes.forEach(node => {
      if (!clusters.has(node.clusterId)) {
        clusters.set(node.clusterId, []);
      }
      clusters.get(node.clusterId)!.push(node);
    });
    
    // Connect nodes within each cluster
    clusters.forEach((clusterNodes, clusterId) => {
      // Each node connects to the other 2 nodes in its cluster
      for (let i = 0; i < clusterNodes.length; i++) {
        for (let j = i + 1; j < clusterNodes.length; j++) {
          const from = clusterNodes[i];
          const to = clusterNodes[j];
          const distance = Math.sqrt(
            Math.pow(from.x - to.x, 2) + Math.pow(from.y - to.y, 2)
          );
          
          connections.push({
            from,
            to,
            distance,
            clusterId
          });
        }
      }
    });
    
    return connections;
  };

  const nodes = generateNodes();
  const connections = generateConnections(nodes);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="relative bg-[#044248] py-20 lg:py-32 h-screen overflow-y-hidden">
        <Image src="/backgroundDots.png" alt="CORE Development Logo" width={1000} height={1000} className="absolute top-0 -right-80 z-100" />

        {/* Background Pattern */}
        <div className="absolute inset-0">
          
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#E27025]/40 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-[#E27025]/40 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#E27025]/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/4 right-1/3 w-20 h-20 bg-[#E27025]/40 rounded-full animate-pulse"></div>
        
      </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
            <div className="space-y-8">
              {/* Brand Badge */}
              <div className="inline-flex items-center space-x-3 bg-orange-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-orange-400/30">
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-[#E27025]">Leading Africa's Climate Future</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                 <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  <span className="text-[#E27025]">Climate Oriented</span>
                  <br />
                  <span className="bg-gradient-to-r text-white bg-clip-text text-transparent">
                    Resilience,
                  </span>
                  <br />
                  <span className="text-[#E27025]">Empowerment</span>
                  <br />
                  <span className="text-white bg-clip-text text-transparent bg-gradient-to-r">& Development</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-[600px] leading-relaxed">
                  CORE Development leads Africa's transition to climate resilient and sustainable development through
                  innovative solutions, community engagement, and strategic partnerships across the continent.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <Link href="/projects">
                    <Zap className="mr-2 h-5 w-5" />
                    Explore Our Impact
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white/10 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-transparent"
                >
                  <Link href="/contact">
                    <Users className="mr-2 h-5 w-5" />
                    Learn More
                  </Link>
                </Button>
              </div>

            </div>

            {/* CORE Logo Section */}
            {/* <div className="relative flex justify-center lg:justify-end">
              <div className="relative">

                <div className="relative p-8 bg-white/10 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 border border-white/20">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-3xl opacity-50"></div>
                  <Image
                    src="/CoreLogo.png"
                    alt="CORE Development Logo"
                    width={400}
                    height={400}
                    className="relative z-10 w-full h-auto max-w-sm mx-auto"
                    priority
                  />
                </div>


                <div className="absolute -top-4 -right-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-bounce duration-[4s]">
                  Est. 2024
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg border border-white/20">
                  Ethiopia
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">Our Vision</h2>
            <p className="text-xl text-gray-600 max-w-[800px] mx-auto">
              To lead Africa's transition to climate resilient and sustainable development, creating a future where
              communities thrive in harmony with nature.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Leaf className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle className="text-green-800">Climate Resilience</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Building adaptive capacity to climate change through innovative solutions and community-based
                  approaches.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-orange-500 mb-4" />
                <CardTitle className="text-orange-700">Community Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Empowering local communities with knowledge, resources, and tools for sustainable development.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Target className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle className="text-green-800">Strategic Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Implementing targeted interventions that create lasting positive change across Africa.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Globe className="h-12 w-12 text-orange-500 mb-4" />
                <CardTitle className="text-orange-700">Continental Reach</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Scaling solutions across African nations to maximize impact and knowledge sharing.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <Image
                src="/SmartTap.png"
                alt="CORE Development team in Ethiopia"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-800">
                About CORE Development
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">
                Rooted in Ethiopia, Impacting Africa
              </h2>
              <p className="text-lg text-gray-600">
                Based in Ethiopia, CORE Development is at the forefront of Africa's sustainable development movement. We
                combine local expertise with global best practices to address climate challenges and build resilient
                communities.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Climate adaptation strategies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Sustainable agriculture programs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Renewable energy initiatives</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Community capacity building</span>
                </div>
              </div>
              <Link href="/founders">
                <Button className="bg-[#E27025] hover:bg-[#c46c32] text-white mt-4">
                  Meet Our Founders
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  )
}



{/*



*/}