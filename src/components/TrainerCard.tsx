
import { Instagram, Facebook, Twitter } from 'lucide-react';

export interface TrainerProps {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  socialMedia?: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
}

const TrainerCard = ({ trainer }: { trainer: TrainerProps }) => {
  return (
    <div className="card group overflow-hidden">
      <div className="aspect-[3/4] overflow-hidden relative">
        <img 
          src={trainer.image} 
          alt={trainer.name} 
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-6 w-full">
            <div className="flex justify-center space-x-4 mb-4">
              {trainer.socialMedia?.instagram && (
                <a 
                  href={trainer.socialMedia.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white rounded-full p-2 text-zoezi-dark hover:bg-zoezi-purple hover:text-white transition-colors"
                >
                  <Instagram size={18} />
                </a>
              )}
              {trainer.socialMedia?.facebook && (
                <a 
                  href={trainer.socialMedia.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white rounded-full p-2 text-zoezi-dark hover:bg-zoezi-purple hover:text-white transition-colors"
                >
                  <Facebook size={18} />
                </a>
              )}
              {trainer.socialMedia?.twitter && (
                <a 
                  href={trainer.socialMedia.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white rounded-full p-2 text-zoezi-dark hover:bg-zoezi-purple hover:text-white transition-colors"
                >
                  <Twitter size={18} />
                </a>
              )}
            </div>
            <p className="text-white text-sm text-center">{trainer.bio}</p>
          </div>
        </div>
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold">{trainer.name}</h3>
        <p className="text-zoezi-purple font-medium">{trainer.role}</p>
      </div>
    </div>
  );
};

export default TrainerCard;
