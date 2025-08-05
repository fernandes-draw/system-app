import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command';
import {
  Blocks,
  FolderCog,
  LayoutDashboard,
  Settings,
  Truck,
  User,
  UserPlus2,
  UserStarIcon,
} from 'lucide-react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <Command className='bg-secondary rounded-none'>
      <CommandInput placeholder='Clique num item ou busque...' />
      <CommandList>
        <CommandEmpty>Nenhum resultado encontrado...</CommandEmpty>
        <CommandGroup heading='Cadastros'>
          <CommandItem>
            <LayoutDashboard className='mr-2 h-4 w-4' />
            <Link href='/dashboard'>Painel de Controle</Link>
          </CommandItem>
          <CommandItem>
            <Blocks className='mr-2 h-4 w-4' />
            <Link href='/products'>Produtos</Link>
          </CommandItem>
          <CommandItem>
            <FolderCog className='mr-2 h-4 w-4' />
            <Link href='/projects'>Projetos</Link>
          </CommandItem>
          <CommandItem>
            <UserStarIcon className='mr-2 h-4 w-4' />
            <Link href='/clients'>Clientes</Link>
          </CommandItem>
          <CommandItem>
            <Truck className='mr-2 h-4 w-4' />
            <Link href='/suppliers'>Fornecedores</Link>
          </CommandItem>
          <CommandItem>
            <UserPlus2 className='mr-2 h-4 w-4' />
            <Link href='/users'>Usuários</Link>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading='Configurações'>
          <CommandItem>
            <User className='mr-2 h-4 w-4' />
            <span className=''>Perfil</span>
            <CommandShortcut>Ctrl+U</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings className='mr-2 h-4 w-4' />
            <span className=''>Configurações</span>
            <CommandShortcut>Ctrl+C</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
};

export default Sidebar;
