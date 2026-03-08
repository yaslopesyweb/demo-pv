import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface CursoCardProps {
  titulo: string;
  descricao: string;
  inicio: string;
  colecao: string;
  badges: string[];
  cor: string;
}

export function CursoCard({ titulo, descricao, inicio, colecao, badges, cor }: CursoCardProps) {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow rounded-2xl overflow-hidden border-gray-200 relative">
      <div
        className="absolute top-0 left-0 right-0 h-2"
        style={{backgroundColor: cor}}
      />

      <CardHeader className="pb-2">
        <CardTitle 
          className="text-xl"
          style={{ 
            fontFamily: 'Ubuntu, sans-serif',
            color: cor,
            fontWeight: 500
          }}
        >
          {titulo}
        </CardTitle>
        <p 
          className="text-sm mt-1"
          style={{ 
            fontFamily: 'Ubuntu, sans-serif',
            color: 'rgb(60, 60, 60)',
            lineHeight: '1.5'
          }}
        >
          {descricao}
        </p>
      </CardHeader>
      <CardContent className="grow space-y-3">
        <div>
          <p 
            className="text-xs"
            style={{ 
              fontFamily: 'Ubuntu, sans-serif',
              color: 'rgb(60, 60, 60)',
              lineHeight: '1.5'
            }}
          >
            <span className="font-medium">Início previsto das aulas:</span> {inicio}
          </p>
          <p 
            className="text-xs mt-1"
            style={{ 
              fontFamily: 'Ubuntu, sans-serif',
              color: 'rgb(60, 60, 60)',
              lineHeight: '1.5'
            }}
          >
            <span className="font-medium">Coleção:</span> {colecao}
          </p>
        </div>
        
        <div>
          <p 
            className="text-xs font-medium mb-2"
            style={{ 
              fontFamily: 'Ubuntu, sans-serif',
              color: 'rgb(60, 60, 60)'
            }}
          >
            Simulados:
          </p>
          <div className="flex flex-wrap gap-2">
            {badges.map((badge, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="text-xs font-normal px-3 py-1"
                style={{ 
                  fontFamily: 'Ubuntu, sans-serif',
                  borderColor: cor,
                  color: cor,
                  backgroundColor: 'white'
                }}
              >
                {badge}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full text-white font-medium py-2 text-sm rounded-3xl hover:opacity-90 transition-opacity flex items-center justify-center"
          style={{ 
            fontFamily: 'Ubuntu, sans-serif',
            backgroundColor: cor,
            border: 'none'
          }}
        >
          MATRICULE-SE JÁ 
          <ArrowRight className="ml-1 h-4 w-4" strokeWidth={3} />
        </Button>
      </CardFooter>
    </Card>
  );
}